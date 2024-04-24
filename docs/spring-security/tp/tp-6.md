---
sidebar_position: 6
---

# TP Eni Store API (Partie 6)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 à 6 d’avoir réalisé les TP proposés.

**Durée Estimée : 1h**

## Enonce

Avant d'utiliser les jetons JWT, nous allons terminer de tester **BasicAuth** avec nos utilisateurs en base de données !

Nous allons également en profiter pour restreindre l'accès à la route **DELETE** /api/v1/articles/id uniquement aux administrateurs (**ROLE_ADMIN**).

Pour ce faire, vous devrez :

- Créer la classe BO **User** qui implémente **UserDetails**.
- Avoir le Repository pour l'entité **User**.
- Ajouter la restriction à la route DELETE /api/v1/articles/id pour le rôle **ADMIN**.
- Surcharger la méthode de récupération d'un utilisateur via **BasicAuth**, comme cela a été fait dans la démonstration (configAuthBuilder, MongoAuthUserDetailService, etc)

:::warning Les Mot de passe cryptés !

Nous utilisons l'algorithme **BCrypt** pour vérifier les mots de passe en basic authentification. Cela signifie que dans votre base de données MongoDB, vous devrez insérer des mots de passe cryptés en **BCrypt**, sinon l'utilisateur ne pourra jamais être connecté !

:::