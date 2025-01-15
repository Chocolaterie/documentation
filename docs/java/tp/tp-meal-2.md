---
sidebar_position: 11
---
 
# TP - Meal (Partie 2)

### Main

Voici le main déjà développé, débrouillez-vous pour qu'il fonctionne et que les prints s'affichent bien dans la console.

:::warning Attention 

VOUS NE DEVEZ PAS TOUCHER AU CONTENU DU CODE DANS LE MAIN

:::

Le package sera nommé : `fr.eni.tp`

Dans la DAO les données initialisées:
```java
List<Movie> meals = Arrays.asList(
    new Meal(1, "Pizza", Arrays.asList(new Ingredient(1, "Cheese", "200g"),new Ingredient(2, "Tomato", "3 pcs"))), 
    new Meal(2, "Salade", Arrays.asList(new Ingredient(1, "Lettuce", "1 bunch"),new Ingredient(2, "Tomato", "3 pcs"),new Ingredient(5, "Olive Oil", "50ml"))), 
    new Meal(3, "Pâtes", Arrays.asList(new Ingredient(4, "Pasta", "250g")),new Ingredient(5, "Olive Oil", "50ml"))));
```

```java
public class Main {

    public static void main(String[] args) {
        // Initialisation de la couche Service
        MealService mealService = new MealService();

        // Tester la fonctionnalité getAll
        System.out.println("=== Liste de tous les repas ===");
        for (Meal meal : mealService.getAll()) {
            System.out.println(meal);
            System.out.println("Ingrédients :");
            for (Ingredient ingredient : meal.getIngredients()) {
                System.out.println("- " + ingredient);
            }
        }

        // Tester la fonctionnalité getById
        System.out.println("\n=== Recherche d'un repas par ID ===");
        int testId = 2;
        Meal foundMeal = mealService.getById(testId);
        if (foundMeal != null) {
            System.out.println("Repas trouvé pour l'ID " + testId + " : " + foundMeal);
            System.out.println("Ingrédients :");
            for (Ingredient ingredient : foundMeal.getIngredients()) {
                System.out.println("- " + ingredient);
            }
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