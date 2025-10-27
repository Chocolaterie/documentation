---
sidebar_position: 1
--- 

# TP - Découvrir les tableaux

## Objectif du TP

Dans ce TP, vous allez apprendre à :

- Déclarer et initialiser un tableau en Java  
- Parcourir un tableau avec une boucle  
- Réaliser des calculs simples sur les données  
- Utiliser le débogueur de votre IDE (Eclipse, IntelliJ ou NetBeans)

**Durée estimée : 1 à 2 heures*

---

## Contexte

Vous travaillez dans un petit magasin.  
Le gérant souhaite un programme pour **analyser les ventes de la semaine**.  
Il saisit les montants journaliers dans un tableau, et votre mission est de créer un programme Java qui permette de :  
- afficher les ventes de chaque jour,  
- calculer des statistiques simples,  
- et comprendre le déroulement du code grâce au débogueur.

---

## Étape 1 - Mise en place du projet

1. Créez un nouveau projet Java dans votre IDE (Eclipse, IntelliJ IDEA ou NetBeans).  
2. Créez une classe nommée **SalesAnalysis.java**.  
3. Ajoutez la méthode **main** suivante :

```java
public class SalesAnalysis {
    public static void main(String[] args) {
        // Step 1: create your array here
        // Step 2: display the values
        // Step 3: calculate total, average, and find the max sale
    }
}
```

Exécutez le programme pour vérifier qu’il s’exécute correctement (même s’il ne fait encore rien).

---

## Étape 2 - Déclarer et initialiser un tableau

Créez un tableau contenant les ventes (type `double`) pour 7 jours.  
Utilisez des valeurs réalistes, par exemple entre 50 et 300 euros.

**Indications :**
- Utilisez la syntaxe `double[] nom = {...};`  
- Affichez la taille du tableau (`.length`)  
- Testez votre affichage avec une boucle `for`

```java
// Example of array declaration
double[] sales = { /* enter your 7 daily sales here */ };

// Example of loop structure (to complete)
for (int i = 0; i < sales.length; i++) {
    // Display the value for each day
}
```

Question : Quelle est la première et la dernière valeur affichée ?  
Pourquoi la boucle commence-t-elle à 0 ?

---

## Étape 3 - Calculer la somme et la moyenne

Ajoutez un calcul du **total** et de la **moyenne** des ventes.

**Indications :**
- Créez une variable `double total = 0;`  
- Parcourez le tableau et additionnez les valeurs  
- La moyenne est `total / sales.length`  
- Affichez les résultats

```java
double total = 0;
// TODO: add a loop to calculate total

double average = 0; // Replace 0 with the correct formula
System.out.println("Total sales: " + total);
System.out.println("Average sales: " + average);
```

Question :  
Que se passe-t-il si vous changez le nombre d’éléments dans le tableau ?  
La moyenne se met-elle à jour automatiquement ?

---

## Étape 4 - Trouver la meilleure vente

Le gérant veut savoir **quel jour** a eu la meilleure vente.

**Indications :**
- Créez une variable `maxSale` pour la plus grande valeur  
- Créez une variable `maxDay` pour le jour correspondant  
- Comparez les ventes dans une boucle  

```java
double maxSale = sales[0];  // starting point
int maxDay = 0;

// TODO: loop through the array to find the best sale

System.out.println("Best sale: " + maxSale + " (day " + (maxDay + 1) + ")");
```

Question :  
Pourquoi commence-t-on la boucle à l’indice 1 et non 0 dans ce cas ?

---

## Étape 5 - Utiliser le débogueur

### Mise en place

1. Placez un **point d’arrêt (breakpoint)** sur la ligne `double total = 0;`  
2. Lancez le programme en **mode Debug**  
3. Utilisez les commandes :
   - *Step Over* : exécuter la ligne suivante  
   - *Step Into* : entrer dans une méthode  
   - *Resume* : continuer jusqu’au prochain point d’arrêt  

### Observation

- Survolez les variables pour voir leur valeur évoluer  
- Vérifiez le contenu du tableau `sales`  
- Suivez comment `total` ou `maxSale` changent pendant l’exécution  

Questions :
- Quand `maxSale` change-t-il de valeur ?  
- Que se passe-t-il si vous changez une valeur du tableau pendant le débogage ?

---

## Étape 6 - Amélioration (facultatif)

Proposez des améliorations à votre programme.

1. Créez une méthode `displayArray` qui affiche tout le tableau.  
2. Utilisez un `Scanner` pour permettre la saisie des ventes.  
3. Triez le tableau avant l’affichage (recherchez la méthode `Arrays.sort()`).

```java
// Method to complete
public static void displayArray(double[] array) {
    // TODO: display each element of the array here
}
```

---

## Bilan du TP

À la fin de ce TP, vous savez :

- Créer et parcourir un tableau en Java  
- Calculer des statistiques simples  
- Utiliser le débogueur pour comprendre le déroulement d’un programme  

---

:::info
Pour aller plus loin :
- Ajoutez un tableau de noms de produits correspondant aux ventes.  
- Créez une méthode qui retourne le jour où la vente a été la plus élevée.  
- Testez à nouveau ces fonctions avec le débogueur.
:::