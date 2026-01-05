---
sidebar_position: 7
---

# TP Store API (Partie 6 - JWT & Annotation)

> **Prérequis** : Avoir complété les TP précédents.

**Durée estimée : 1h à 4h**

## Énoncé

Dans cette partie, vous allez mettre en place un système de vérification **JWT** sous forme de **middleware**.

Soyez attentifs afin d'éviter les erreurs (annotations, configuration, etc.).

## Étapes principales

- S'assurer que le code qui **vérifie** et **crée les tokens** soit déplacé dans un service dédié (exemple : `JWTService`).
- Installer les dépendances nécessaires.
- Configurer **Spring Security** (`SecurityConfig`) :
  - Désactiver le système qui bloque toutes les routes par défaut.
  - Désactiver le **CORS** et le **CSRF**.
- Créer votre **annotation personnalisée**.
- Créer un **interceptor** (vide dans un premier temps).
- Ajouter l'interceptor dans la configuration de sécurité (`SecurityConfig`).
- Commencer à implémenter les **guard clauses** dans l'interceptor :
  - Vérifier que la requête cible une méthode.
  - Vérifier que l'annotation personnalisée est présente.
  - Vérifier qu'un token est bien envoyé dans le header.
- Tester l'annotation sur au moins une route (par exemple un `GET /article` simple) :
  - Tester le comportement **sans token**.
  - Tester le comportement avec un **token invalide**.
  - Tester le comportement avec un **token valide**.
