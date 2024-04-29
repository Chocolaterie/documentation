---
sidebar_position: 7
---

# TP Eni Store API (Partie 7)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 à 6 d’avoir réalisé les TP proposés.

**Durée Estimée : 1-2h**

## Enonce

Vous allez vous baser sur la démo pour mettre en place le système JWT. Il y a plusieurs classes à créer et quelques configurations à effectuer dans Spring Security, donc veillez à être attentif lorsque vous reproduisez la démo dans le TP.

Étant donné que nous n'utilisons plus BasicAuth, il est nécessaire de supprimer le code qui authentifiait l'utilisateur avec BasicAuth.

:::warning Être minutieux

Il est essentiel de ne pas se perdre dans les classes et les méthodes. Soyez extrêmement attentif, prenez votre temps pour relire et assurez-vous de ne pas oublier les annotations ainsi que les noms de fonctions à éventuellement adapter !

La majorité des erreurs que vous allez rencontrer seront de cet ordre !

:::

## Pour tester

Une fois terminé pour tester vous pourrez :

### Vous connecter pour récupérer le token :

![Diagram](img/tp_07_get_token.png)

### Supprimer un article en s'authentifiant via le token récupéré :

![Diagram](img/tp_07_delete_use_token.png)