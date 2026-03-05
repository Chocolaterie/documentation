---
sidebar_position: 6
---

# TP Spring DAO JPA

## Étape 1

- Créez l'abstraction des DAO (ex: `IDAOMovie` )
- La classe qui fera la version mock (ex: `DAOMovieMock`) pour les fausses données, donc qui implémente votre interface DAO (la version abstraite).
- Cela sous-entend que vous devez utiliser la version abstraite dans les Controllers, Services, etc (en gros dans les injections)

## Étape 2

- Installez **Spring Data** et le connecteur **MySQL** dans Gradle.
- Configurez les paramètres de connexion dans `application.properties`.

**Objectif :** S'assurer que le serveur démarre sans erreur.

## Étape 3

### Insérer des fausses données en base

- Migrer ses BO en version Entity (attention à l'héritage) afin de générer les tables
- Cela implique de faire les bonne relations (ManyToOne, OneToOne, etc)
- Prenez le temps de générer vos propres données en utilisant des outils comme [Mockaroo](https://www.mockaroo.com).
- data.sql pour les données par défaut

### Développement

- Créez les classes comme `DAOMovieJPA` qui implémente votre interface DA version JPA.
- Déclarez et utilisez les **profils Spring** pour gérer l'injection de dépendances (nous voulons injecter uniquement `DAOMovieJPA` et **pas** `DAOMovieMock`).
