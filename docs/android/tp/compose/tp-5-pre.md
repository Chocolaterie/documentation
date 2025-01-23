---
sidebar_position: 5
---

# TP Android - Partie 05 (préliminaire)

> **Durée Estimée : Indeterminée (2h)**

## Enoncé

### Objectif

Adapter le TP actuel pour qu'il fonctionne avec un **web service** (API).

Globallement le TP se base sur la Démo !

### Back-End (API)

L'API Local est située ici : https://raw.githubusercontent.com/Chocolaterie/EniWebService/refs/heads/main/api/android-articles.json

### Etapes :

- Refaire le **RetrofitTools**
- Refaire le **ArticleService**
- Refaire le système de **AppDialogHelpers**

#### ArticleService

Vous devez implémenter la route suivante dans votre **ArticleService**

1. GET: **android-articles.json** : Récupérer la liste des articles.

#### Liste des articles

- Réadaptez la page de la **liste des articles** pour qu'elle récupère les articles via l'API.
- Ajouter un bouton pour appeler l'api qui récupére les articles

Quand l'api est appelé :
- Afficher la popup de chargement quand l'api est appelée
- Fermer la popup quand appel terminé