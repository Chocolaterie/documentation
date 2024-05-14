---
sidebar_position: 5
---

# TP Article API (Partie 4)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H**

## Enonce

En partant du TP précédent, l'objectif est d'utilise des réponses métier (donc un JSON qui contient un code, un message, et la donnée)

Exemple de réponse attendu pour **/articles**: 

```js
{
    code : "200",
    message: "La liste des articles a été récupérés avec succès",
    data : la liste des articles
}
```

Appliquer cette méthodologie dans toutes vos routes !

## Règle de gestion

### RG-001 : Récupérer les articles

#### Si les articles ont été récupérés
200 | La liste des articles a été récupérés avec succès | Les articles en JSON

### RG-002 : Récupérer un article

#### Si l'uid existe et l'article récupéré avec succès
200 | Article récupéré avec succès | L'article JSON 

#### Si l'uid n'existe pas en base
702 | Impossible de récupérer un article avec l'UID $uid | Null

### RG-003 : Ajouter un article

#### Si ajouté avec succès
200 | Article ajouté avec succès | L'article JSON 

#### Si le titre existe déjà en base
701 | Impossible d'ajouter un article avec un titre déjà existant | Null

#### Si contrôle de surface invalide
710 | Contrôle de surface non valide | La liste des erreurs en JSON

### RG-004 : Modifier un article

#### Si modifié avec succès
200 | Article modifié avec succès | L'article JSON 

#### Si le titre existe déjà en base
701 | Impossible de modifier un article avec un titre déjà existant | Null

#### Si contrôle de surface invalide
710 | Contrôle de surface non valide | La liste des erreurs en JSON

### RG-005 : Supprimer un article

#### Si supprimé avec succès
200 | L'article $uid a été supprimé avec succès | L'article supprimé JSON 

#### Si l'uid n'existe pas en base
702 | Impossible de supprimer un article dont l'UID n'existe pas | Null