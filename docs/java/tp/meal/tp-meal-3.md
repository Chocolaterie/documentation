---
sidebar_position: 12
---
 
# TP - Meal (Partie 3)

## Objectifs du TP

Dans ce TP, nous allons transformer et améliorer nos services pour obtenir une solution plus professionnelle. Les objectifs principaux sont les suivants :

- **Réponse métier** : Inclure des réponses structurées avec un code, un message, et des données (`data`).
- **Gestion des logs** : Ajouter des journaux pour tracer les actions importantes (les réponses métier).
- **Tests de non-régression** : Mettre en place des tests unitaires pour valider le bon fonctionnement des fonctionnalités existantes.

Ce TP constitue la dernière étape pour vous entraîner. 

Vous êtes libre de créer votre propre Main/IHM, que ce soit en console ou avec Swing. 

Si vous avez le temps, pensez également à créer des tests qui répondent aux besoins spécifiés.


## Features

### FT-001 : Récupérer les repas

#### Si les repas ont été récupérés
**Code**: 200 | **Message**: La liste des repas a été récupérée avec succès | **Données**: Les repas

### FT-002 : Récupérer un repas

#### Si l'ID existe et le repas est récupéré avec succès
**Code**: 200 | **Message**: Repas récupéré avec succès | **Données**: Le repas

#### Si l'ID n'existe pas en base
**Code**: 702 | **Message**: Impossible de récupérer le repas avec l'ID `$id` | **Données**: Null

### FT-003 : Ajouter un nouveau repas

#### Si le repas est valide
**Code**: 200 | **Message**: Repas ajouté avec succès | **Données**: Le repas

#### Si le nom du repas existe déjà
**Code**: 703 | **Message**: Impossible d'ajouter un repas déjà existant, le nom `$name` existe déjà | **Données**: Null

### FT-004 : Supprimer un repas

#### Si le repas existe
**Code**: 200 | **Message**: Repas supprimé avec succès | **Données**: Le repas supprimé

#### Si le repas n'existe pas
**Code**: 702 | **Message**: Impossible de supprimer un repas inexistant | **Données**: Null

## Tests

Écrivez des tests pour couvrir tous les cas possibles de vos fonctionnalités, comme cela a été vu dans le cours !

En pratique, créez une classe de tests appelée **`MealServiceTests`**, qui contiendra tous les tests nécessaires pour vérifier le bon fonctionnement des fonctionnalités implémentées.

### Points à inclure :
- **Tests des cas positifs** : Vérifiez que les fonctionnalités renvoient les résultats attendus dans les conditions normales.
- **Tests des cas négatifs** : Testez les cas où les données sont manquantes, invalides, ou que l'ID n'existe pas.
- **Validation des réponses métier** : Vérifiez que les réponses renvoient le bon `code`, `message`, et les données (`data`), selon les spécifications.

### Exemple d'organisation de vos tests :
- Test de la récupération de tous les repas (`getAll`).
- Test de la récupération d’un repas spécifique par son ID (`getById`).
- Test de la récupération d’un repas avec un ID inexistant (`getById`).
- Test de l’ajout d’un repas avec des données valides (`add`).
- Test de l’ajout d’un repas avec un nom déjà existant.
- Test de la suppression d’un repas existant (`delete`).
- Test de la suppression d’un repas inexistant.