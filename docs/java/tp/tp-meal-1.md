---
sidebar_position: 10
---
 
# TP - Meal (Partie 1)

## Objectifs du TP

Dans ce TP, vous allez apprendre à :
- Créer une application structurée en couches **BO**, **DAO**, **Service** et **IHM**.
- Manipuler des concepts de base tels que les entités, les relations, et la gestion de la persistance des données.
- Appliquer ces concepts pour gérer des recettes (`Meal`) avec leurs ingrédients (`Ingredient`).

## Instructions

### 1. Définir les Entités

- Créez deux classes principales dans la couche BO (**Business Object**) :
  - **Meal** : représente un repas. Les attributs incluront :
    - `id` : Identifiant unique.
    - `name` : Nom du repas.
    - `ingredients` : Liste des ingrédients associés.
  - **Ingredient** : représente un ingrédient. Les attributs incluront :
    - `id` : Identifiant unique.
    - `name` : Nom de l'ingrédient.
    - `quantity` : Quantité de l'ingrédient utilisée dans un repas.

### 2. Couche DAO (**Data Access Object**)

- Implémentez une classe `MealDAO` qui aura les responsabilités suivantes :
  - Stocker une liste de repas en mémoire.
  - Ajouter un nouveau repas.
  - Récupérer un repas par son identifiant.
  - Supprimer un repas.

### 3. Couche Service

- Implémentez une classe `MealService` qui utilisera `MealDAO` pour gérer la logique métier. Les fonctionnalités incluront :
  - Ajouter un nouveau repas avec des ingrédients.
  - Lister tous les repas.
  - Récupérer les détails d'un repas spécifique.
  - Supprimer un repas par son identifiant.

### 4. Interface Utilisateur (IHM)

- Développez une simple interface utilisateur textuelle ou graphique permettant à l'utilisateur de :
  - Ajouter un repas avec des ingrédients.
  - Voir la liste des repas disponibles.
  - Afficher les détails d'un repas spécifique.
  - Supprimer un repas.

### 5. Consignes supplémentaires

- **Structure** : Respectez la séparation des couches pour une meilleure lisibilité et maintenabilité.
- **Documentation** : Ajoutez des commentaires clairs pour expliquer le fonctionnement de chaque classe et méthode.

### 6. Critères de Validation

- Les entités sont correctement définies et respectent les relations entre `Meal` et `Ingredient`.
- La persistance des données est gérée via la couche DAO.
- La logique métier est centralisée dans la couche Service.
- L'utilisateur peut interagir avec le programme via l'IHM pour accomplir toutes les actions requises.

## Partie 1 

Dans un premier temps, commencez par implémenter les deux fonctionnalités principales : `getAll` et `getById`.

1. Débutez avec la couche **BO** et **DAO**.
2. Continuez avec la couche **Service**.
3. Terminez par l'implémentation de l'IHM, que ce soit en console ou avec une interface graphique.

:::info **A LIRE**

Pour l'instant, la gestion des ingrédients n'est pas encore prise en charge.

:::

### Schema UML (version 1)

![Screenshot](img/tp_meal_01_01.png)

---

### Main

Voici le main déjà développé, débrouillez-vous pour qu'il fonctionne et que les prints s'affichent bien dans la console.

:::warning Attention 

VOUS NE DEVEZ PAS TOUCHER AU CONTENU DU CODE DANS LE MAIN

:::

Le package sera nommé : `fr.eni.tp`

Dans la DAO les données initialisées:
```java

private List<Meal> meals = Arrays.asList(
    new Meal(1, "Pizza"), 
    new Meal(2, "Salade"),
    new Meal(3, "Pâtes"));
```

Le Main:
```java
public class Main {

    public static void main(String[] args) {
        // Initialisation du Service
        MealService mealService = new MealService();

        // Tester la fonctionnalité getAll
        System.out.println("=== Liste de tous les repas ===");
        for (Meal meal : mealService.getAll()) {
            System.out.println(meal);
        }

        // Tester la fonctionnalité getById
        System.out.println("\n=== Recherche d'un repas par ID ===");
        int testId = 2;
        Meal foundMeal = mealService.getById(testId);
        if (foundMeal != null) {
            System.out.println("Repas trouvé pour l'ID " + testId + " : " + foundMeal);
        } else {
            System.out.println("Aucun repas trouvé pour l'ID " + testId);
        }

        // Tester un ID qui n'existe pas
        int invalidId = 5;
        Meal notFoundMeal = mealService.getById(invalidId);
        if (notFoundMeal != null) {
            System.out.println("Repas trouvé pour l'ID " + invalidId + " : " + notFoundMeal);
        } else {
            System.out.println("Aucun repas trouvé pour l'ID " + invalidId);
        }
    }
}
```