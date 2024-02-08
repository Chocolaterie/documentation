---
sidebar_position: 3
---

# TP Spring DAO

## Etape 1

- Installe Spring Data et le connecteur MySQL dans Gradle.
- Crée la base de données "film" dans Workbench.
- Configure les paramètres de connexion et Spring Data dans le fichier application.properties.
- Ajoute les annotations appropriées dans les entités, avec les relations nécessaires.

Objectif : Assurer que le serveur démarre sans erreur et que les tables et les relations sont correctement répliquées dans la base de données.

## Etape 2

Insérer des fausses données en bases :
- Utilise les fichiers SQL fournis comme point de départ, en les adaptant si nécessaire.
- Prends le temps de générer toi-même les données en utilisant des outils comme https://www.mockaroo.com.

:::warning Rappel important

N'oubliez pas d'inclure ces lignes dans le fichier **application.properties** afin d'exécuter le script data.sql et d'alimenter la base de données

```
# Alimenter la base de données via le data.sql
spring.jpa.defer-datasource-initialization=true
spring.sql.init.mode=always
```

:::

Ensuite :

- Créer les interfaces DAO.
- Implémenter les classes JPA à partir de tes interfaces DAO.
- Utiliser un profil dans l'injection (par exemple : jpa).
- Implémenter la couche de service non mockée (service utilisant tes interfaces DAO).

## Etape 3

- Utiliser et faire fonctionner tes controlleurs et vues
- Dans tes controlleurs tu appel uniquement ton Metier/BLL donc le Service
