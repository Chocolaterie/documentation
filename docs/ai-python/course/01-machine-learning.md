---
id: introduction-machine-learning
title: Introduction au Machine Learning
sidebar_position: 1
---

# Introduction au Machine Learning

Le **Machine Learning** (ou apprentissage automatique) est une branche de l'intelligence artificielle. Il permet à une machine d’apprendre à partir de données pour effectuer des prédictions ou prendre des décisions, sans être explicitement programmée pour chaque tâche.

## Objectif

Comprendre ce qu’est le Machine Learning, les différents types d’apprentissage et quelques exemples concrets pour illustrer les principes fondamentaux.

## Qu’est-ce que le Machine Learning ?

Le Machine Learning consiste à **entraîner un modèle** à partir d’exemples de données. Le modèle apprend ainsi à détecter des régularités ou des motifs, puis à les utiliser pour faire des prédictions sur de nouvelles données.

Exemple simple : prédire si un e-mail est un spam ou non à partir de centaines d’exemples étiquetés.


## Pourquoi utiliser le Machine Learning ?

- Il est difficile d’écrire des règles explicites pour certains problèmes (ex : reconnaissance d’images).
- On dispose de grandes quantités de données.
- On cherche à automatiser des décisions à grande échelle.

## Comment ça fonctionne ?

1. **Collecte de données** : on réunit un ensemble d’exemples pertinents.
2. **Entraînement** : le modèle apprend à partir de ces données.
3. **Prédiction** : une fois entraîné, il peut faire des prédictions sur de nouvelles situations.
4. **Évaluation** : on mesure la performance du modèle pour juger de sa qualité.

## Les grandes familles de Machine Learning

### Apprentissage supervisé

L’algorithme apprend à partir d’exemples **avec les bonnes réponses connues**. Chaque donnée est associée à une étiquette ou valeur cible.

**Exemples d’applications :**
- Prédire le prix d’un bien immobilier (régression)
- Identifier la catégorie d’un produit à partir de sa description (classification)

**Principe :**
On fournit des couples entrée → sortie. Le modèle apprend à prédire la sortie à partir de nouvelles entrées.

### Apprentissage non supervisé

L’algorithme apprend **sans étiquette**. Il cherche des structures cachées dans les données.

**Exemples d’applications :**
- Regrouper des clients ayant des comportements similaires
- Réduire le nombre de variables d’un jeu de données (ex : via une analyse en composantes principales)

**Principe :**
Le modèle identifie des regroupements ou des relations internes dans les données.

### Apprentissage par renforcement

Un agent apprend à interagir avec un environnement en recevant des **récompenses** ou des **punitions** selon ses actions.

**Exemples d’applications :**
- Jouer à un jeu vidéo
- Contrôler un robot dans un environnement

**Principe :**
L’agent essaie différentes stratégies, apprend de ses erreurs, et améliore ses décisions pour maximiser une récompense à long terme.

## Exemple simple : prédire le prix d’une maison

Objectif : estimer le prix d’une maison selon plusieurs caractéristiques (superficie, nombre de chambres, localisation).

Étapes typiques :
1. Collecter des données historiques de ventes
2. Nettoyer et préparer les données
3. Entraîner un modèle de régression
4. Évaluer la performance du modèle
5. Prédire le prix de nouvelles maisons

## Vocabulaire de base

| Terme | Définition |
|-------|------------|
| Donnée | Un exemple concret utilisé pour l’entraînement |
| Modèle | L’algorithme qui apprend à partir des données |
| Entraînement | La phase d’apprentissage du modèle |
| Prédiction | Le résultat produit par le modèle |
| Évaluation | L’analyse de la qualité des prédictions |

## Pour aller plus loin

- Comprendre la différence entre surapprentissage (overfitting) et sous-apprentissage (underfitting)
- Explorer les algorithmes classiques : régression linéaire, arbres de décision, k plus proches voisins
- Manipuler des outils comme scikit-learn ou Teachable Machine pour expérimenter

## Conclusion

Le Machine Learning est une méthode puissante pour résoudre des problèmes complexes en apprenant à partir des données. Il existe plusieurs types d’apprentissage adaptés à différents cas d’usage, et il est essentiel de bien comprendre les données et les objectifs pour réussir un projet de Machine Learning.

