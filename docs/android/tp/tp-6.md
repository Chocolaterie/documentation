---
sidebar_position: 6
---

# TP Android - Partie 06

> **Durée Estimée : Indeterminée (4h) **

## Enoncé

Améliorer le TP avec le web service

### Back-End (API)

Avoir un systeme d'authentification

Donc il faut un modèle User/Person (email, pseudo, password, etc..)

Des routes pour :

- La connexion : Tester si couple email/password correct => generation token pour etre re utilisé dans le front
- L'inscription : Insert d'utilisateur en base
- Récupération de mot de passe : Renvoie un nouveau mot de passe généré dans le front

### Front

Compléter les 3 pages du premier TP (Login, Inscription, Récupération de mot passe) avec les appels API