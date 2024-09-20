---
sidebar_position: 1
---

# Résumé Global

## Une page

Une activité qui doit au moins hériter d'une classe spécifique, par exemple `ComponentActivity`.  
Il est aussi possible de créer une page avec un `Fragment`, `NavHost` (à approfondir).

Le rendu se fait dans la méthode `onCreate` (celle avec un seul paramètre).

## Preview

Permet de prévisualiser le développement avec Compose. Utiliser l'annotation `@Preview`.

## Callback / Fonction lambda

Signature d'une fonction lambda en Kotlin : 

```kt
maFonction : () -> Unit
```

Il est donc possible de transférer/référencer des fonctions en paramètres.

```kt
 
fun test(maFonction : () -> Unit){
    maFonction()
}

// Utilisation 1
test({
    // Du code
})

// Utilisation 2 : Parametre nommé
test(maFonction = {
    // Du code
})
```

## MVVM

Architecture IHM pour gérer les données dans les vues, notamment avec `Stateful` ou `LiveData`.

`Stateful` ou `LiveData` permettent de rafraîchir en temps réel les données grâce au pattern Observable.

## Navigation (NavHost et NavHostController)

Il est possible de naviguer entre différentes pages sous forme de composants en utilisant `NavHost` et `NavHostController`.

Dans ce contexte, il faut une activité qui orchestre le changement de page à l'aide des deux classes citées ci-dessus.

Pour vulgariser, une `Activity` peut être comparée à un livre contenant des pages. Ces pages sont des vues **composables** (ce ne sont pas des classes, mais bien des vues composables).

Exemple :

```kt
val navController = rememberNavController()

MyTheme {
    Scaffold { innerPadding ->
        NavHost(
            modifier = Modifier
                .padding(innerPadding)
                .fillMaxSize(),
            navController = navController,
            startDestination = "firstPage"
        ) {
            composable("firstPage") {
                MaVueOne()
            }
            composable("secondPage") {
                MaVueTwo()
            }
        }
    }
}
```


## API

Appels d'API grâce à `Retrofit` pour les requêtes, et `Moshi` pour le mapping JSON - Objet.

Il est important de bien vérifier les données reçues, notamment en termes de généricité (les données peuvent être une liste d'articles, un token, etc.).
