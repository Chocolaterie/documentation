---
sidebar_position: 2
---

# TP Article API (Partie 2)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 2 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H-2H**

## Enonce

Nous allons réaliser un CRUD sur le modèle Article (à l'exception du POST).

Il sera nécessaire de créer les éléments suivants :

- **Article** : La classe **Article** dans le package **BO**
- **ArticleDAO** : L'interface DAO Article pour le CRUD (findAll, findByUid, delete)
- **ArticleDAOSQL** : L'implémentation de l'interface **ArticleDAO** qui utilisera les données SQL
- **ArticleSQLRepository** : Le repository JPA pour l'abstraction des requêtes SQL
- **ArticleService** : La couche métier (ou service/BLL) qui fera appel à la **DAO**
- **ArticleRestController** : Ce contrôleur contiendra les **routes API** pour le CRUD d'un article (donc 3 routes)

:::warning Rappel

- On ne réalise pas le POST car cela nécessiterait des configurations de sécurité pour autoriser l'envoi de données dans le corps de la requête (CSRF, CORS, etc.)

- N'oubliez pas de configurer le fichier application.properties/yml pour établir correctement la connexion avec votre base de données.

- Il faut le bon driver sql dans gradle 

:::

## Architecture visuelle

![Diagram](img/tp_2_archi_sql.png)

## Delete

Pour la route delete, pour l'instant, nous allons retourner un booléen (**true** lorsque la suppression fonctionne)

## Tester

Pour tester les routes, vous devrez insérer 2 à 3 articles en base de données