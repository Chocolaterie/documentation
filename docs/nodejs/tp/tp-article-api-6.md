---
sidebar_position: 7
---

# TP Article API (Partie 6)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 7 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H**

## Enonce

Organisez votre code pour rendre le projet plus propre en exportant les morceaux de code qui se trouvaient dans app.js vers des fichiers séparés.

Quelques exemples de propositions

### Proposition 1

- /routes/article-routes.js
- /routes/auth-routes.js
- /shared/middlewares.js
- /shared/helpers.js
- /mongoose/mongoose-config.js
- /mongoose/models/mongoose-article.js
- /mongoose/models/mongoose-user.js

### Proposition 2

- /article/
    - article-service.js
    - article-routes.js
    - article-mongoose.js
- /auth/
    - auth-routes.js
    - auth-service.js
    - user-mongoose.js
- /shared/middlewares.js
- /shared/helpers.js
- /mongoose/mongoose-config.js
