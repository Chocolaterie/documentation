---
sidebar_position: 6
---

# TP Spring DAO JDBC

## Etape 1

- Installeer Spring Data JDBC et le connecteur MySQL dans Gradle.
- Crée la base de données "movie" dans Workbench.
- Configurer les paramètres de connexion dans application.properties.

Objectif : S'assurer que le serveur démarre sans erreur.

## Etape 2

Insérer des fausses données en bases :
- Utilise les fichiers SQL fournis comme point de départ, en les adaptant si nécessaire.
- Prends le temps de générer toi-même les données en utilisant des outils comme https://www.mockaroo.com.

Ensuite :

- Créer la classe **DAOMovieMySQL** qui implemente votre interface DAO.
- Déclarer et utiliser les profiles pour faire fonctionner l'injection (car on veut injecter que `DAOMovieMySQL` et **pas** `DAOMovieMock`)
- Faire les requêtes et le **RowMapper** dans l'implementation **DAOMovieMySQL**
