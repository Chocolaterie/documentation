---
sidebar_position: 3
---

# TP Eni Store API - Partie 3 Messages

> **Prérequis** : Avoir complété les modules 1 et 2 ainsi que les TP associés.

**Durée estimée : 30min - 1h**

---

## Énoncé

Dans cette partie, vous allez ajouter la gestion des **messages métier** associés aux traitements dans vos **Services**.

Le modèle de réponse doit contenir les éléments suivants :
- **code** : le code de statut métier
- **message** : le message associé (multilingue)
- **data** : les données retournées (ex. un article ou une liste d’articles)

Vous devez mettre en place un mécanisme permettant de traduire les messages en **français** et en **anglais**.

## Mise en place de l’internationalisation

Pour gérer la traduction des messages métier, vous pouvez :
- Copier le fichier `LocaleHelper` de la démo

## Messages attendus

:::info
Les exemples ci-dessous sont fournis en français.  
À vous d’ajouter les équivalents en anglais dans vos fichiers de traduction.
:::

### getAll
- Réponse : **La liste des articles a été récupérée avec succès**

### getId
- Si l’article est trouvé : **L'article a été récupéré avec succès**
- Si l’article n’est pas trouvé : **L'article n'existe pas**

### delete
- Si l’article est supprimé : **L'article a été supprimé avec succès**
- Si l’article n’existe pas : **L'article n'existe pas**

### save
- Si l’id n’existe pas : **Article créé avec succès**
- Si l’id existe déjà : **Article modifié avec succès**