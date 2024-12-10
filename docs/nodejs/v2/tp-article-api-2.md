---
sidebar_position: 4
---

# TP Article API (Partie 2)

**Durée Estimée : 1H**

## Enonce

En partant du TP précédent, l'objectif sera de remplacer les données en mémoire par les données sur mongodb

Un **Article** a trois attributs:
 - title: String
 - content: String
 - author: String

Dans mongo compass :
- Créer une base de donnée **db_article** avec une collection **articles**
- Insérer 2-3 articles dans la collection **articles**

Dans votre code :
- Adapter la connection mongoose
- Créer un model mongoose **Article**
- Dans toutes les routes, assurez-vous d'appeler les méthodes de la base de données du modèle Article pour compléter le TP (et donc ne plus utiliser les faux articles en mémoire)

:::info Conseil

Il est préférable de procéder par étape, c'est à dire **compléter et tester** les routes **une par une**.

Exemple: Vous commencerez pas adapter la route **/articles**, la tester  sur Postman et quand cela fonctionne passer à la route suivante.

:::

## Règle de gestion (Pour plus détails)

### RG-001 : Récupérer les articles

#### Si les articles ont été récupérés
Les articles en JSON

### RG-002 : Récupérer un article

#### Si l'id existe et l'article récupéré avec succès
L'article JSON 

#### Si l'id n'existe pas en base
Code : 702

### RG-003 : Ajouter un article

#### Si ajouté avec succès

L'article JSON 

### RG-004 : Supprimer un article

#### Si supprimé avec succès
Code : 200

#### Si l'id n'existe pas en base
Code : 702