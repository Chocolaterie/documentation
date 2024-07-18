---
sidebar_position: 10
---

# WebService API - Supplément

## Envoyer des données


Sur **Retrofit** pour envoyer des données dans le **body**, il va falloir utiliser le **@Body** dans la fonction de votre service qui appel l'API

Tout est dans la doc Retrofit : https://square.github.io/retrofit/

Néanmoins, voici une synthèse et quelques exemples :

### Exemple : Envoyer un Film
Exemple si je voulais envoyer un Film dans l'API


```kotlin
interface MovieService {

    ...

    @POST("mon-url")
    suspend fun sendMovie(@Body movie: Movie) : Movie

    ...
}
```

:::warning Attention au retour

Le `: Movie` à la fin de la fonction est le retour de l'API (la réponse). Évidemment, ce n'est pas le sujet ici, c'est totalement indépendant de ce que l'on envoie avec `Body`. Le retour dépend de l'API que vous interrogez !

:::

### Exemple : Envoyer un String

```kotlin
interface MovieService {

    ...

    @POST("mon-url")
    suspend fun sendUnTruc(@Body maValeur: String) : QuelqueChose

    ...
}
```

Ce sont des exemples d'utilisation ; il faut vous adapter à votre besoin, bien évidemment. Courage !