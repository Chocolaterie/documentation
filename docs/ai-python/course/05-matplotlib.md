---
id: introduction-matplotlib
title: Introduction à matplotlib
sidebar_position: 5
---

# Introduction à matplotlib

**matplotlib** est une bibliothèque Python utilisée pour créer des **graphiques**. C’est l’outil de base pour visualiser des données en Python.

Elle permet de tracer :
- Des courbes (lignes)
- Des histogrammes
- Des nuages de points (scatter)
- Des camemberts, barres, etc.

## Pourquoi utiliser matplotlib ?

- Visualiser rapidement les données
- Comprendre les relations entre variables
- Repérer les tendances, anomalies, ou valeurs extrêmes

## Installation

Si vous avez Anaconda, matplotlib est déjà installé. Sinon :

```bash
pip install matplotlib
```

## Importation de base

```python
import matplotlib.pyplot as plt
```

## Courbe simple (line plot)

```python
x = [1, 2, 3, 4]
y = [2, 4, 6, 8]

plt.plot(x, y)
plt.title("Courbe simple")
plt.xlabel("x")
plt.ylabel("y")
plt.show()
```

## Ajouter des styles

```python
plt.plot(x, y, color='green', marker='o', linestyle='--')
```

## Tracer plusieurs courbes

```python
plt.plot(x, y, label="y = 2x")
plt.plot(x, [i**2 for i in x], label="y = x²")
plt.legend()
plt.title("Deux courbes")
plt.show()
```

## Histogramme

```python
notes = [12, 14, 15, 13, 17, 18, 12, 14, 14, 19]

plt.hist(notes, bins=5)
plt.title("Répartition des notes")
plt.xlabel("Note")
plt.ylabel("Effectif")
plt.show()
```

## Nuage de points (scatter plot)

```python
x = [1, 2, 3, 4, 5]
y = [5, 4, 6, 7, 5]

plt.scatter(x, y)
plt.title("Nuage de points")
plt.xlabel("x")
plt.ylabel("y")
plt.show()
```

## Diagramme en barres

```python
noms = ["Alice", "Bob", "Charlie"]
valeurs = [10, 15, 7]

plt.bar(noms, valeurs)
plt.title("Scores par personne")
plt.show()
```

## Sauvegarder une figure

```python
plt.plot(x, y)
plt.savefig("graphique.png")
```

## Personnalisation rapide

Quelques options fréquentes :

| Option | Exemple |
|--------|---------|
| Couleur | `color='red'` |
| Style ligne | `linestyle='--'` |
| Marqueur | `marker='o'` |
| Titre | `plt.title("Titre")` |
| Légende | `plt.legend()` |

## À retenir

| Élément | Rôle |
|--------|------|
| plot() | Courbe |
| scatter() | Nuage de points |
| hist() | Histogramme |
| bar() | Barres |
| show() | Affiche le graphique |
| savefig() | Sauvegarde en image |
| title(), xlabel(), ylabel() | Ajout de texte |

## Prochaines étapes

- Combiner matplotlib avec pandas (`df.plot(...)`)
- Découvrir seaborn pour des graphiques statistiques plus avancés
