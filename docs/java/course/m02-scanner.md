---
sidebar_position: 4
---

# Cours Java - Utilisation de la classe `Scanner`

## Introduction
La classe `Scanner` en Java est utilisée pour lire les entrées utilisateur via la console. C'est un outil essentiel pour interagir avec les utilisateurs dans les programmes console.

## Importation de la classe Scanner
Avant de pouvoir utiliser `Scanner`, vous devez importer la classe depuis le package `java.util` :

```java
import java.util.Scanner;
```

---

## Création d'un objet Scanner
Pour utiliser `Scanner`, vous devez créer une instance de cette classe :

```java
Scanner scanner = new Scanner(System.in);
```

L'argument `System.in` indique que l'entrée provient du clavier.

---

## Lecture de différentes types de données

### 1. Lire un entier (`int`)
```java
System.out.print("Entrez un nombre entier : ");
int nombre = scanner.nextInt();
System.out.println("Vous avez entré : " + nombre);
```

### 2. Lire un nombre décimal (`double`)
```java
System.out.print("Entrez un nombre décimal : ");
double decimal = scanner.nextDouble();
System.out.println("Vous avez entré : " + decimal);
```

### 3. Lire une chaîne de caractères (`String`)
#### Lecture d'un mot (sans espace) :
```java
System.out.print("Entrez un mot : ");
String mot = scanner.next();
System.out.println("Vous avez entré : " + mot);
```

#### Lecture d'une ligne complète (avec espaces) :
```java
System.out.print("Entrez une phrase : ");
String phrase = scanner.nextLine();
System.out.println("Vous avez entré : " + phrase);
```

### 4. Lire un caractère (`char`)
```java
System.out.print("Entrez un caractère : ");
char caractere = scanner.next().charAt(0);
System.out.println("Vous avez entré : " + caractere);
```

---

## Bonnes pratiques
- **Fermer le Scanner** : Lorsque vous avez fini d'utiliser `Scanner`, fermez-le pour libérer les ressources :
```java
scanner.close();
```
- **Gestion des erreurs** : Utilisez des structures de contrôle (`try-catch`) pour éviter les erreurs lors de la saisie incorrecte.

---

## Exemple complet
Voici un exemple combinant plusieurs types de saisie :

```java
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Entrez votre nom : ");
        String nom = scanner.nextLine();

        System.out.print("Entrez votre âge : ");
        int age = scanner.nextInt();
        scanner.nextLine(); // Consommer la nouvelle ligne

        System.out.print("Entrez votre ville : ");
        String ville = scanner.nextLine();

        System.out.println("Bonjour " + nom + ", " + age + " ans, de " + ville + ".");
        scanner.close();
    }
}
```

---

**Conclusion**
La classe `Scanner` est un outil puissant et simple pour lire l'entrée utilisateur en Java. En suivant ces exemples, vous pourrez interagir efficacement avec les utilisateurs dans vos projets.
