---
sidebar_position: 4
---

# TP Android - Partie 04

> **Durée Estimée : 1h**

## Enoncé

À présent, vous allez créer :
- Un **ViewModel** pour gérér les articles avec **MutableStateFlow**.
- La liste des articles dans la vue **Compose** devra se recharger automatiquement en écoutant les changements des articles dans le **ViewModel**.

## Pour tester

Pour le moment, nous n'avons pas de **web service** ou autre moyen de récupérer des articles à l'extérieur. Donc, pour tester que votre composition **MVVM** fonctionne, vous pouvez pour le moment ajouter un bouton qui va ajouter un **Article** de test pour voir si la liste se rafraîchit automatiquement.

Donc, pour le **TP**, ajoutez une fonction `addArticle` dans le **ViewModel** qui va gérer l'ajout du film dans la liste. Cette fonction sera donc appelée via le clic du bouton **Ajouter**.
