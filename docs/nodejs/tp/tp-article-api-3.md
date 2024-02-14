---
sidebar_position: 3
---

# TP Article API (Partie 3)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H**

## Enonce

En partant du TP précédent, l'objectif sera de remplacer les données en mémoire par les données sur mongodb

Dans Mongo Compass :
- Ajouter mongoose sur votre projet
- Creer une base de donnée "db_article" avec une collection "articles"

Dans votre code :
- Créer un model Article
- Dans toutes les routes, assurez-vous d'appeler les méthodes de la base de données du modèle Article pour compléter le TP