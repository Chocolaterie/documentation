---
sidebar_position: 6
---

# TP Twitter - Partie 05

> **Durée Estimée : 1h**

## Enoncé

Il convient d'avoir suivi la démo sur les APIs et l'exploitation de notre propre API Node.js avec des tokens pour le TP.

Dorénavant, nous allons utiliser notre propre API backend en local pour récupérer les tweets et compléter les quatre écrans, y compris la page de connexion.

Dans l'API backend fournie, la connexion génère un token JWT d'une durée d'une heure et les points d'entrée comme la récupération des tweets nécessiteront ce token, donc certaines routes seront protégées par authentification.

Par exemple, si j'accède à la page des tweets sans être connecté et que j'appelle le service :

![Screenshot](img/tp_api_node_01_01.png)

## Lancer le Back-End Express

Veuille récupérer le `tp_twitter_back_api`
Dans le dossier en ligne de commande :
- `npm install`  ou  `npm ci` (pour installer les dépendances, uniquement la première fois)
- `node app.js` (pour lancer l'app)
 
## Postman

Si vous voulez comprendre comment fonctionne une API qui vous est fournie, il convient de tester les points d'entrée sur Postman ou via Swagger s'il existe.

Exemple de requête de connexion à l'API avec Postman :


![Screenshot](img/tp_api_node_01_02.png)

Exemple de requête de connexion à l'API avec Swagger :

Connexion jwt avec swagger

![Screenshot](img/tp_api_node_01_03.png)

Appel d'une route

![Screenshot](img/tp_api_node_01_04.png)

## Login

Les comptes mock :
- isaac@gmail.com | password 
- tata@gmail.com | 123456
- toto@gmail.com | 12345

Pour la connexion l'api:

- POST: `http://127.0.01:3000/login`
- vous devez envoyer dans le request body :
    - email
    - password

### Coupe email mot de passe incorrect

Si les informations ne sont pas correctes

![Screenshot](img/tp_api_node_login_01.png)

### Connexion correcte


Si les informations sont correctes :
- Le token retourné par l'API devra être stocké dans Flutter par divers moyens (par exemple, dans un singleton, une variable statique ou un cache, à vous de choisir).
- À chaque fois que vous allez appeler une API sécurisée, vous enverrez le token dans l'en-tête "Authorization" de la requête HTTP depuis Flutter, en utilisant le schéma Bearer Token.
- Redirigez vers la page des commentaires/tweets

## Les commentaires/tweets

Si vous êtes connecté, l'endpoint pour afficher les commentaires sur la page est :

- GET: `http://127.0.01:3000/messages`
- Envoyer le token dans le header bearer token

![Screenshot](img/tp_api_node_comments_02.png)
