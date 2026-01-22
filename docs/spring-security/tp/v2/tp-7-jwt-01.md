---
sidebar_position: 7
---

# TP Eni Store API (Partie 7 - JWT 01)

> **Prérequis** : Avoir complété les TP précédents.

**Durée estimée : 1h à 2h**

## Énoncé

Dans cette partie, vous allez mettre en place le système **JWT** en vous basant sur la démo.

Soyez attentifs lors de la reproduction de la démo afin d’éviter les erreurs.

## Pour tester

Une fois terminé pour tester vous pourrez :

### Vous connecter pour récupérer le token :

Une url pour générer un otken à l'aide d'un email/mot de passe.

Mocker la vérification email/mot de passe dans une **AuthDAOMock** (Abstraction **IAuthDAO**).

### Tester que le token est valide

Créer une URL pour vérifier que le token est valide

Le token est renseigné dans le header Authorization (via Postman pour le moment Authorization -> Bearer Token comme la démo)

### Rappel

Le code qui gère le token Jwt dans un Service (JwtService par exemple ou AuthService comme bon vous semble)

:::warning Attention

Il est essentiel de rester rigoureux dans la création des classes et des méthodes.
- Relisez attentivement votre code
- Vérifiez les annotations
- Assurez-vous que les noms de fonctions sont correctement adaptés

La majorité des erreurs rencontrées dans ce TP sont dues à des oublis ou des imprécisions.
:::
