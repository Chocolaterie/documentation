---
sidebar_position: 6
---

# TP Spring DAO JDBC

## Étape 1

- Créez l'abstraction des DAO (ex: `IDAOMovie` )
- La classe qui fera la version mock (ex: `DAOMovieMock`) pour les fausses données, donc qui implémente votre interface DAO (la version abstraite).
- Cela sous-entend que vous devez utiliser la version abstraite dans les Controllers, Services, etc (en gros dans les injections)

## Étape 2

- Installez **Spring Data JDBC** et le connecteur **MySQL** dans Gradle.
- Créez la base de données `movie` dans **Workbench**.
- Configurez les paramètres de connexion dans `application.properties`.

**Objectif :** S'assurer que le serveur démarre sans erreur.

## Étape 3

### Insérer des fausses données en base

- Utilisez les fichiers SQL fournis comme point de départ, en les adaptant si nécessaire.
- Prenez le temps de générer vos propres données en utilisant des outils comme [Mockaroo](https://www.mockaroo.com).

### Développement

- Créez la classe `DAOMovieMySQL` qui implémente votre interface DAO.
- Déclarez et utilisez les **profils Spring** pour gérer l'injection de dépendances (nous voulons injecter uniquement `DAOMovieMySQL` et **pas** `DAOMovieMock`).
- Implémentez les requêtes SQL et le `RowMapper` dans l'implémentation `DAOMovieMySQL`.
