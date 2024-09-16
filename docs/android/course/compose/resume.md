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

## MVVM

Architecture IHM pour gérer les données dans les vues, notamment avec `Stateful` ou `LiveData`.

`Stateful` ou `LiveData` permettent de rafraîchir en temps réel les données grâce au pattern Observable.

## API

Appels d'API grâce à `Retrofit` pour les requêtes, et `Moshi` pour le mapping JSON - Objet.

Il est important de bien vérifier les données reçues, notamment en termes de généricité (les données peuvent être une liste d'articles, un token, etc.).
