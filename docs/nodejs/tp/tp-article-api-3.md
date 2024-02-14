---
sidebar_position: 3
---

# TP Article API (Partie 3)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H**

## Enonce

En partant du TP précédent, l'objectif sera de remplacer les données en mémoire par les données sur mongodb

Dans mongo compass :
- Créer une base de donnée **db_article** avec une collection **articles**
- Insérer 2-3 articles dans la collection **articles**

Dans votre code :
- Ajouter mongoose sur votre projet
- Faîtes la connection mongoose
- Créer un model mongoose **Article**
- Dans toutes les routes, assurez-vous d'appeler les méthodes de la base de données du modèle Article pour compléter le TP (et donc ne plus utiliser les faux articles en mémoire)

:::warning Ne pas oublier !

Il n y'a pas de **slug** dans ce TP, on reste sur l'utilisation des **id**

l'id est un type **Number** et non **String**

:::

:::info Conseil

Laisser les faux **articles** en mémoire tant que le TP n'est pas fini.

Il est préférable de procéder par étape, c'est à dire **compléter et tester** les routes **une par une**.

Exemple: Vous commencerez pas adapter la route **/articles**, la tester  sur Postman et quand cela fonctionne passer à la route suivante.

:::