---
sidebar_position: 8
---

# TP Eni Store API (Partie 3)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi tout les modules et d’avoir réalisé les TP proposés.

**Durée Estimée : 1h**

## Enonce

Dans ce TP, nous allons mettre en place des réponses métier plutôt que de simplement renvoyer des données sans aucun moyen de connaître le résultat de nos traitements métier.

Ajouter le **ServiceResponse** générique

## Quelques pistes 


### Dans le Metier
Étant donné qu'il est nécessaire de maintenir le fonctionnement des anciennes routes, vous devrez probablement dupliquer des fonctions dans la couche métier/service. 

## Règle de gestion

### RG-001 : Récupérer les articles

#### Si les articles ont été récupérés
200 | La liste des articles a été récupérés avec succès | Les articles en JSON

### RG-002 : Récupérer un article

#### Si l'id existe et l'article récupéré avec succès
200 | Article récupéré avec succès | L'article JSON 

#### Si l'id n'existe pas en base
702 | Impossible de récupérer un article avec l'id $id | Null

### RG-003 : Ajouter un article

#### Si ajouté avec succès
200 | Article ajouté avec succès | L'article JSON 

#### Si le titre existe déjà en base (à la fin)
701 | Impossible d'ajouter un article avec un titre déjà existant | Null

### RG-004 : Modifier un article

#### Si modifié avec succès
200 | Article modifié avec succès | L'article JSON 

#### Si le titre existe déjà en base (à la fin)
701 | Impossible de modifier un article avec un titre déjà existant | Null

### RG-005 : Supprimer un article

#### Si supprimé avec succès
200 | L'article $id a été supprimé avec succès | L'article supprimé JSON 

#### Si l'id n'existe pas en base
702 | Impossible de supprimer un article dont l'id n'existe pas | Null