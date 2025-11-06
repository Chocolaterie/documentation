---
sidebar_position: 4
---

# TP Java - Gestion d'un Inventaire avec Java Swing

## Objectif
Créer une application graphique Java pour gérer un inventaire d'objets de jeu vidéo.

**Durée estimée : 1 à 2 heures**

---

## Fonctionnalités à Implémenter
1. **Ajouter un objet** : Saisir le nom et la quantité d'un objet.
2. **Afficher l'inventaire** : Montrer les objets dans une liste.
3. **Supprimer un objet** : Supprimer l'objet sélectionné.

---

## Étape 1 : Création de la Fenêtre Principale

**Instructions :**
- Créez une classe `GameInventory`.
- Déclarez un objet `JFrame` pour représenter la fenêtre principale.
- Définissez les paramètres de base de la fenêtre :
  - **Titre**
  - **Taille**
  - **Comportement à la fermeture**
  - **Visibilité**

**Conseil :** Utilisez `setSize()`, `setTitle()`, et `setDefaultCloseOperation()`.

---

## Étape 2 : Ajout des Composants

**Instructions :**
- Déclarez les composants suivants :
  - **TextField** pour le nom de l'objet.
  - **TextField** pour la quantité.
  - **JButton** pour "Ajouter" et "Supprimer".
  - **JList** pour afficher l'inventaire.

- Organisez ces composants dans des panneaux.
- Utilisez un gestionnaire de mise en page tel que `FlowLayout` ou `BorderLayout`.

**Conseil :** Utilisez `JPanel` pour structurer l'interface graphique.

---

## Étape 3 : Gestion des Événements

**Instructions :**
- Ajoutez des **ActionListeners** aux boutons "Ajouter" et "Supprimer".
- Lors de l'ajout :
  - Récupérez le texte des champs de saisie.
  - Vérifiez que les champs ne sont pas vides.
  - Ajoutez l'objet à la liste.
- Lors de la suppression :
  - Vérifiez qu'un élément est sélectionné dans la liste.
  - Supprimez-le de la liste.

**Conseil :** Utilisez `addActionListener()` et `getText()` pour gérer les entrées.

---

## Étape 4 : Structure Complète

**Instructions :**
- Créez une méthode principale `main`.
- Instanciez l'objet principal `GameInventory`.
- Configurez l'interface graphique et lancez l'application.

**Conseil :** Assurez-vous que tous les composants sont bien ajoutés à la fenêtre avant de la rendre visible.

---

## Résultats Attendus
- **Ajout d'objets** : Un nouvel objet apparaît dans la liste.
- **Suppression** : L'élément sélectionné est supprimé.
- **Validation des entrées** : Vérifiez que les champs ne sont pas vides.
