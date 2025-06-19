---

id: methodes-validation
title: Méthodes de validation
sidebar_position: 8
---

# Méthodes de validation

Lorsque l’on entraîne un modèle, on veut savoir **s’il sera bon sur des données qu’il ne connaît pas**.  
C’est pourquoi on utilise des techniques de **validation**, qui consistent à séparer les données en parties pour entraîner et tester.

Voici les trois approches les plus courantes :


## 1. Validation non-croisée (Holdout Method)

### Description

- On divise le jeu de données en **deux parties** : entraînement et test
- On **entraîne sur une partie**, on **teste sur l’autre**
- C’est la méthode la plus simple

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

model = LogisticRegression()
model.fit(X_train, y_train)

score = model.score(X_test, y_test)
print(f"Score : {score}")
```

### Exemple concret

Tu donnes 70 fiches d’exercices à un élève pour s’entraîner, et tu en gardes 30 pour l’interroger.  
Mais selon les fiches choisies, le test peut être trop facile ou trop difficile.


## 2. Validation croisée « seul contre tous » (Leave-One-Out)

### Description

- Chaque observation est utilisée **seule pour le test**, toutes les autres pour l’entraînement
- On répète ça **autant de fois qu’il y a de données**
- Très précis mais très lent sur de grands jeux de données

```python
from sklearn.model_selection import LeaveOneOut
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

loo = LeaveOneOut()
model = LogisticRegression()

scores = cross_val_score(model, X, y, cv=loo)
print(f"Score moyen : {scores.mean()}")
```

### Exemple concret

Tu interroges un élève **sur une seule fiche**, et tu recommences avec toutes les autres fiches une à une.  
Tu obtiens un score moyen très précis.


## 3. Validation croisée à k blocs (K-Fold Cross Validation)

### Description

- Le jeu de données est divisé en **k blocs (folds)**
- À chaque tour, 1 bloc sert au test, les autres à l’entraînement
- On répète **k fois**, chaque bloc est testé une fois

```python
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
scores = cross_val_score(model, X, y, cv=5)  # ici k=5

print(f"Scores par fold : {scores}")
print(f"Score moyen : {scores.mean()}")
```

#### Comparatif des méthodes

| Méthode                  | Nombre de tests | Précision         | Vitesse               | Recommandée pour                     |
|--------------------------|-----------------|-------------------|------------------------|--------------------------------------|
| Holdout                  | 1               | Faible à moyenne  | Rapide                | Démonstration, cas simples           |
| Leave-One-Out            | n               | Très élevée       | Très lent (si n grand)| Petits jeux de données, cas critiques |
| K-Fold (ex: K=5 ou 10)   | K               | Élevée et stable  | Moyennement rapide     | Pratique courante                    |


### Comment distinguer Leave-One-Out et K-Fold simplement ?

Imagine que tu as 100 fiches d'exercices pour entraîner un élève. Tu veux savoir s’il a bien compris la leçon.

#### Leave-One-Out

Tu fais autant de tests qu’il y a d’exemples (par exemple 100 si tu as 100 données).
À chaque test, tu gardes 1 seul exemple pour tester, et tu utilises tous les autres pour entraîner.

C’est une méthode très précise, car chaque donnée est testée individuellement.
Mais elle est aussi très lente si tu as beaucoup de données, et pas toujours bien équilibrée si certaines classes sont rares.

#### K-Fold 

Tu fais 5 tests : chaque fois, un groupe différent est utilisé pour interroger, les autres pour s’entraîner.

C’est plus équilibré et plus fiable qu’un seul test.

#### Tableau comparatif

| Critère          | Leave-One-Out                        | K-Fold (ex: K=5)            |
| ---------------- | ------------------------------------ | --------------------------- |
| Nombre de tests  | 1 par fiche (ex : 100 tests)         | 1 par groupe (ex : 5 tests) |
| Taille du test   | 1 seule donnée                       | 1 bloc (ex : 20 données)    |
| Vitesse          | Très lent (si beaucoup de données)   | Moyen (dépend de K)         |
| Précision        | Très haute (chaque point testé seul) | Haute et équilibrée         |
| Quand l’utiliser | Petits jeux de données               | Cas pratiques courants      |


#### Tableau encore plus simple

| Méthode       | Comment ça marche simplement ?                            |
| ------------- | --------------------------------------------------------- |
| Leave-One-Out | Tu testes **1 fiche à la fois**, et tu recommences       |
| K-Fold        | Tu testes **des petits groupes de fiches** à chaque fois |

### K-FOLD plus détaillé

Exemple clair avec 10 données et K=5

`D1, D2, D3, D4, D5, D6, D7, D8, D9, D10`

Tu choisis K = 5, donc tu coupes en 5 groupes de 2 données :

| Fold | Données |
| ---- | ------- |
| 1    | D1, D2  |
| 2    | D3, D4  |
| 3    | D5, D6  |
| 4    | D7, D8  |
| 5    | D9, D10 |

**Ce qui se passe**

Tu fais 5 tours (K=5) :

| Tour | Données d’entraînement | Données de test |
| ---- | ---------------------- | --------------- |
| 1    | D3 → D10               | D1, D2          |
| 2    | D1, D2, D5 → D10       | D3, D4          |
| 3    | D1 → D4, D7 → D10      | D5, D6          |
| 4    | D1 → D6, D9, D10       | D7, D8          |
| 5    | D1 → D8                | D9, D10         |


**Résumé**

Avec K-Fold, tu entraînes K fois et tu testes K fois, mais chaque donnée n’est testée qu’une seule fois, et jamais dans le même fold.