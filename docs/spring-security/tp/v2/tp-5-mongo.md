---
sidebar_position: 5
---

# TP Eni Store API (Partie 5 - MongoDB)

> **Prérequis** : Avoir complété les TP précédents.

**Durée estimée : 1h à 2h**

## Énoncé

Dans cette partie, nous allons compléter l’abstraction de la couche **DAO** afin de pouvoir :
- Implémenter une version **Mock**
- Implémenter une version **MongoDB**

Les classes/interfaces à créer ou modifier sont :
- **ArticleDAO** : Interface DAO pour le CRUD (`findAll`, `findById`, `delete`)
- **ArticleDAOMock** : Implémentation de **ArticleDAO** basée sur des données simulées en mémoire (Mock)
- **ArticleDAOMongo** : Implémentation de **ArticleDAO** connectée à MongoDB
- **ArticleMongoRepository** : Repository Spring Data Mongo pour l’abstraction des requêtes

:::warning Rappel
- N’oubliez pas de configurer correctement le fichier `application.properties` ou `application.yml` pour établir la connexion avec votre base MongoDB.
- Ajoutez la dépendance MongoDB dans votre `build.gradle`.  
  :::

## Recommandation

Il est conseillé de commencer par la version **Mock**, afin de vérifier le bon fonctionnement de l’architecture avant d’intégrer MongoDB.

Dans un premier temps, concentrez-vous uniquement sur :
- **ArticleDAO**
- **ArticleDAOMock**

Une fois vos services testés et validés en mode Mock, vous pourrez ajouter l’implémentation MongoDB (**ArticleDAOMongo** et **ArticleMongoRepository**).

## Tests

Réutilisez les tests développés dans la partie précédente afin de vérifier que vos services fonctionnent correctement et que l’intégration MongoDB n’a pas introduit de régressions.
