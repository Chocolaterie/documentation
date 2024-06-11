---
sidebar_position: 3
---

# TP Twitter - Partie 03

> **Durée Estimée : 1h**

## Enoncé

Reprendre le corrigé du TP précédent et charger le projet dans votre IDE.

Nous allons à présent créer une autre page qui servira de page de connexion. La page peut ressembler globalement à ceci :

![Screenshot](img/tp_03_01.png)

Vous avez toute liberté créative, vous pouvez changer le design, les couleurs, etc., sans aucun problème !

Il faudra intégrer les validateurs comme vu dans les démos.

La page par défaut (le home ou le initialRoute) sera la page de connexion, et la route 
(« tweet-list-page » par exemple) pour la page associée au tweet.

![Screenshot](img/tp_03_navigation.png)

:::warning Attention

Le widget **Scaffold** est synonyme d’une page (chacune de vos pages vont posséder un 
**Scaffold** au premier niveau). 

Attention à ne pas utiliser plusieurs fois le **MaterialApp**. 

Le **MaterialApp** va servir de « router » et contenir les routes associées aux pages

:::

## Débutant

Dans un premier temps, vous pouvez simplement créer la page de connexion sans thème personnalisé et sans icône.

- Uniquement un titre
- Champ pour l'email et le mot de passe
- Option pour se souvenir des informations
- Bouton de connexion"=