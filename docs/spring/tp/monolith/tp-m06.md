---
sidebar_position: 7
---

# TP Spring DAO - Partie (07)

## Objectif

- Ajouter un bouton pour naviguer sur la page de création de film
- Dans un film, ajouter le formulaire pour ajouter un avis avec l'utilisateur connecté(e)

## Création de Film

Réutiliser la même page que le formulaire pour modifier un film, sauf que le film doit être vide par défaut et l'id doit être null par conséquence

## Ajouter un avis

- Ajouter un form dans la page détail du film
- Il faut être connecté(e) pour ajouter un avis, donc formulaire visible uniquement si connecté
- Champs : La note et le commentaire
- Position : Le formulaire pour ajouter un avis à mettre avant la liste les avis
- Un utilisateur ne peut pas mettre plusieurs avis sur le même Film