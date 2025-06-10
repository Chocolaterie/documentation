---
id: explain-graph
title: Les Graphs
sidebar_position: 6
---

# Pertinance de graph

## Comprendre Eta² (Eta Squared)

### Qu'est-ce que Eta² ?

Eta² (noté η²) est une **mesure de l'effet** utilisée principalement dans l'analyse de variance (**ANOVA**). Elle permet de quantifier **quelle proportion de la variance totale** d'une variable dépendante est expliquée par une variable indépendante.

### Interprétation

La valeur de Eta² varie entre `0` et `1` :

- `0` signifie **aucun effet** : la variable indépendante n'explique rien.
- `1` signifie **effet total** : toute la variance est expliquée par la variable.

Exemples d'interprétation (règles générales) :

```
η² ≈ 0.01 → effet faible
η² ≈ 0.06 → effet moyen
η² ≈ 0.14 → effet fort
```


### Formule

La formule de Eta² est :

```
η² = SS_effet / SS_total
```

- `SS_effet` : somme des carrés expliquée par le facteur (entre groupes)
- `SS_total` : somme des carrés totale

### Exemple en Python avec statsmodels

```python
import statsmodels.api as sm
from statsmodels.formula.api import ols
import pandas as pd

# Exemple de données
df = pd.DataFrame({
    'note': [12, 14, 15, 10, 9, 13, 17, 16, 11],
    'groupe': ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C']
})

# ANOVA
model = ols('note ~ groupe', data=df).fit()
anova_table = sm.stats.anova_lm(model)

# Calcul de Eta²
eta_squared = anova_table['sum_sq']['groupe'] / anova_table['sum_sq'].sum()
print("Eta² :", eta_squared)
```

### Conclusion

Eta² est une manière simple et intuitive de comprendre **l'importance d'un effet** dans une analyse de variance. Plus η² est grand, plus la variable indépendante a un impact important sur la variable dépendante.
