---
sidebar_position: 6
---

# TP Article API (Partie 5)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H**

## Enonce

Mettre en place une authentification JWT (avec couple email/password) et sécuriser l'accès aux routes suivantes avec un middleware JWT :

- POST : save-article
- DELETE : /article/:id

### Authentifcation

L'authentifcation (couple email/password + generation token si valide) se fera via :
- /auth en POST

Exemple de retour possible quand c'es tvalide :

```js
{
    "code": "202",
    "message": "Authentifié(e) avec succès",
    "data" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdCIsImlhdCI6MTcxNTc4MTYyOSwiZXhwIjoxNzE1NzgxNjU5fQ.duAdZD16pOQbN2BaxXq-heYAiWswyeEl5z5m3z17iHs"
}
```