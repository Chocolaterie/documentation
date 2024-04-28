---
sidebar_position: 9
---

# TP Eni Store API (Partie 9)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi tout les modules et d’avoir réalisé les TP proposés.

**Durée Estimée : 1-3h**

## Enonce

À présent, nous allons ajouter des associations, à savoir :

- **Category** pour les articles :
    - uid
    - label

- Le modèle **Article** possédera donc une association :
    - category_uid

### Administration:

Nous aurons désormais un contrôleur dédié à l'administration, préfixé :

- /api/v2/admin

Nous allons déplacer la suppression de l'article dans les routes administratives, par exemple :

- DELETE : /api/v2/admin/delete-article

Pour ajouter/modifier une catégorie, nous travaillerons également dans les routes administratives, par exemple :

- POST  : /api/v2/admin/add-category
- PATCH : /api/v2/admin/edit-category

:::warning Supprimer une catégorie

Nous ne gérons pas la suppression d'une catégorie, car cela impliquerait de manipuler tous les articles qui dépendaient de la catégorie

:::

## Règle de gestion

### RG-001 : Ajouter une catégorie

#### Si ajoutée avec succès
200 | Categorie ajoutée avec succès | Category JSON 

#### Si le label existe déjà en base
701 | Impossible d'ajouter une catégorie avec un label déjà existant | Null

#### Si contrôle de surface invalide
710 | Contrôle de surface non valide | La liste des erreurs en JSON

### RG-002 : Modifier une catégorie

#### Si modifié avec succès
200 | Catégorie modifiée avec succès | Category JSON 

#### Si le label existe déjà en base
701 | Impossible de modifier une catégorie avec un label déjà existant | Null

#### Si contrôle de surface invalide
710 | Contrôle de surface non valide | La liste des erreurs en JSON