---
id: surentrainement
title: Surentraînement d’un modèle
sidebar_position: 8
---

# Surentraînement (Overfitting)

Quand on entraîne un modèle d’intelligence artificielle, on veut qu’il **apprenne à généraliser** — c’est-à-dire **bien prédire sur de nouvelles données** qu’il n’a jamais vues.

Mais parfois, le modèle **apprend trop bien les exemples du passé**, au point de **mémoriser les réponses au lieu de comprendre la logique**.  
On appelle ça le **surentraînement**, ou **overfitting**.

## Exemple ultra simple

Tu veux qu’un élève reconnaisse si une phrase est correcte ou fausse.

### Tu lui donnes 5 exemples :

| Phrase                        | Correction |
|------------------------------|------------|
| "Je mange une pomme."        | Correcte   |
| "Tu vas au marché."          | Correcte   |
| "Elle parler demain."        | Fausse     |
| "Nous sommes heureux."       | Correcte   |
| "Ils faire du sport."        | Fausse     |

L’élève apprend **par cœur** ces 5 phrases. Il répond parfaitement si tu lui redonnes les mêmes.

Mais si tu lui dis :

> "Tu parler demain."

Il répond : "Correct", car cette phrase **ressemble** à ce qu’il a appris, mais il **n’a pas compris la règle** (le futur ne prend pas l’infinitif ici).

## Ce que ça donne avec un vrai modèle

Un modèle surentraîné a :

- une **précision très élevée sur les données d’entraînement**
- une **précision faible sur les nouvelles données (test)**

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Exemple avec données fictives
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Un arbre très profond = modèle trop complexe
model = DecisionTreeClassifier(max_depth=None)  # Peut tout mémoriser
model.fit(X_train, y_train)

print("Train accuracy :", accuracy_score(y_train, model.predict(X_train)))
print("Test accuracy  :", accuracy_score(y_test, model.predict(X_test)))
```

> Si le modèle a 100% de score sur `X_train` mais seulement 60% sur `X_test`, c’est un **cas clair de surentraînement**.

## Comment éviter le surentraînement ?

| Stratégie                         | Explication simple                      |
|-----------------------------------|------------------------------------------|
| Utiliser un modèle plus simple    | Limiter la profondeur, ou le nombre de paramètres |
| Ajouter plus de données           | Pour qu’il voie plus de situations différentes     |
| Utiliser la validation croisée    | Pour tester sur plusieurs découpages de données    |
| Appliquer du "regularization"     | Forcer le modèle à ne pas trop coller aux données  |
| Nettoyer les données bruyantes    | Moins d'exemples ambigus = moins de confusion      |


## Résumé

> Un modèle surentraîné **connait ses leçons par cœur**,  
> mais **échoue aux contrôles surprise**.
