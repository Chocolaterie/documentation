---
sidebar_position: 5
---

# Cours Java - Programmation Graphique: Fenêtres, Composants et Événements

## Introduction
La programmation graphique en Java repose sur l'utilisation des bibliothèques **Swing** et **AWT**. Ces bibliothèques permettent de créer des interfaces graphiques (GUI).

---

## 1. Création d'une Fenêtre
Pour créer une fenêtre, utilisez la classe `JFrame` de la bibliothèque `javax.swing`.

### Exemple : Création d'une Fenêtre Simple
```java
import javax.swing.JFrame;

public class SimpleWindow {
    public static void main(String[] args) {
        // Création de la fenêtre
        JFrame frame = new JFrame("Ma Première Fenêtre");
        frame.setSize(400, 300); // Taille de la fenêtre
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Ferme l'application
        frame.setVisible(true); // Affiche la fenêtre
    }
}
```

---

## 2. Ajout de Composants
Les **composants** sont des éléments graphiques comme des boutons, étiquettes et champs de texte.

### Exemple : Ajouter un Bouton et une Étiquette
```java
import javax.swing.*;

public class ComponentExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Fenêtre avec Composants");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Création de composants
        JButton button = new JButton("Cliquez-moi");
        JLabel label = new JLabel("Appuyez sur le bouton");

        // Ajout de composants à la fenêtre
        frame.setLayout(new java.awt.FlowLayout()); // Gestionnaire de disposition
        frame.add(label);
        frame.add(button);

        frame.setVisible(true);
    }
}
```

---

## 3. Gestion des Événements
Pour réagir aux actions de l'utilisateur, il faut gérer les **événements** en implémentant l'interface `ActionListener`.

### Exemple : Gérer un Événement de Bouton
```java
import javax.swing.*;
import java.awt.event.*;

public class EventExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Gestion d'Événements");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton button = new JButton("Cliquez-moi");
        JLabel label = new JLabel("En attente...");

        // Ajout du gestionnaire d'événements
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                label.setText("Bouton cliqué!");
            }
        });

        frame.setLayout(new java.awt.FlowLayout());
        frame.add(label);
        frame.add(button);
        frame.setVisible(true);
    }
}
```

---

## 4. Structure Complète
1. **Importer les bibliothèques nécessaires** (`javax.swing`, `java.awt.event`)
2. **Créer une fenêtre** (`JFrame`)
3. **Ajouter des composants** (`JButton`, `JLabel`, `JTextField`...)
4. **Gérer les événements** en utilisant `ActionListener` ou d'autres interfaces.

---

**Conclusion**
Avec ces concepts, vous pouvez créer des interfaces graphiques interactives en Java. Expérimentez avec différents composants et événements pour enrichir vos applications.
