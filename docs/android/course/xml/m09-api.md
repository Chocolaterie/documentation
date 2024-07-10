---
sidebar_position: 9
---

# WebService API (Json)

Sur Android, nous pouvons travailler avec des microservices grâce aux appels API, comme n'importe quelle application front-end moderne.

Comme pour beaucoup de technologies, il existe un large éventail de choix pour atteindre cet objectif. Parmi les solutions les plus anciennes et traditionnelles figurent Retrofit et OkHTTP, utilisés en combinaison avec Moshi pour la conversion JSON.

:::info Note

Pour illustrer ce chapitre, nous allons prendre comme exemple l'affichage d'une liste de films.

:::


## Autorisation

Il faut autoriser l'accès à Internet si vous appelez des API sur un réseau Internet.

- Ajoutez les deux permissions `android.permission.INTERNET` et `android.permission.ACCESS_NETWORK_STATE`

- Selon la version de vos dépendances et du SDK/API Android, il faudra sûrement paramétrer `android:usesCleartextTraffic` à `true` dans la balise `<application>`


AndroidManifest.xml :

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    ...

    <application
        android:usesCleartextTraffic="true"
        
    ...
```

## Moshi et Retrofit

### Installer les dépendances

Dans le gradle :

```
dependencies {
    ...

    // Moshi
    implementation("com.squareup.moshi:moshi:1.14.0")
    implementation("com.squareup.moshi:moshi-kotlin:1.14.0")

    // Retrofit
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")

    // Ok HTTP
    implementation("com.squareup.okhttp3:okhttp:4.9.0")
}
```

### Model

Nous pouvons définir une classe qui servira de modèle/DTO pour convertir/mapper les films de JSON en objets Kotlin.

Nous n'avons pas encore effectué le mapping JSON/classe, seulement créé la classe.

```kotlin
data class Movie (var id : Int = -1, var title: String = "") {
}
```

### Utilitaire Retrofit/Moshi

Il faut à présent créer l'outil qui nous permettra de faire les appels HTTP avec la conversion automatique JSON/classe.

J'ai décidé de l'appeler RetrofitTools, qui possédera principalement des fonctions statiques.

```kotlin
class RetrofitTools {

    companion object{
        // La racine de l'api
        val BASE_URL = "https://raw.githubusercontent.com/Chocolaterie/EniWebService/main/api/"

        // L'utilitaire conversion JSON <=> Objet
        val moshi = Moshi.Builder().add(KotlinJsonAdapterFactory()).build();

        // Retrofit
        val retrofit = Retrofit.Builder()
            .addConverterFactory(MoshiConverterFactory.create(moshi))
            .baseUrl(BASE_URL).build();
    }

}
```

### Service

On peut créer un Service dont le but sera d'appeler les URL liées aux films grâce à notre outil Retrofit. On pourrait l'appeler MovieService

```kotlin
interface MovieService {

    @GET("movies.json")
    suspend fun getMovies() : List<Movie>

    object MovieApi {
        val movieService : MovieService by lazy { retrofit.create(MovieService::class.java) }
    }
}
```

- Ce service utilise notre outil Retrofit en créant un singleton qui utilise implicitement Retrofit, mais pour les URLs spécifiques aux films.

- `object MovieApi` est un singleton, utilisant une syntaxe propre à Kotlin pour rendre le code moins verbeux.

- Dans ce singleton, `val movieService: MovieService by lazy` permet d'instancier notre service de manière paresseuse (lazy), ce qui signifie que l'initialisation du `movieService` ne se fait qu'au premier accès.

### Exploitation du service

Il existe de multiples façons d'exploiter notre service qui appelle l'API :
- Afficher les films dans une liste
- Afficher les films dans les logs
- Appeler le service dans un ViewModel pour diverses raisons
- Etc.

Pour rester le plus simple possible, voici un exemple d'utilisation de notre service qui appelle l'API dans une Activity :

```kotlin
// Appel de la fonction suspend dans une coroutine (tâche asynchrone)
lifecycleScope.launch {
    // Notifier les changements
    var movies = MovieService.MovieApi.movieService.getMovies();

    // Ffficher les films dans le log
    for (movie in movies){
        Log.i("Demo", "La film : ${movie.id} | ${movie.title}");
    }
}
```

:::info Coroutine

Vous remarquerez que j'appelle le service dans un `lifecycleScope.launch`

C'est une coroutine pour appeler des fonctions asynchrones en toute sécurité dans le thread de l'UI

:::


