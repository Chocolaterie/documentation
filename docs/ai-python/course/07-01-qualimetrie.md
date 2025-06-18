---
id: eval-model
title: Évaluation Modèles
sidebar_position: 8
---

# Évaluation des modèles

:::tip Pour bien débuter
Évaluer un modèle, c’est comme vérifier si un élève a bien compris sa leçon : on compare ses réponses (prédictions) à la correction (les vraies valeurs).
:::

## Accuracy (Taux de bonne réponse)

```python
from sklearn.metrics import accuracy_score

# Exemple : sur 100 emails, combien le modèle a-t-il bien classés comme "spam" ou "pas spam" ?
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy : {accuracy}")
```

### Imaginons

| Réalité (y\_test) | Prédiction (y\_pred) |
| ----------------- | -------------------- |
| chat              | chat                 |
| chien             | chat                 |
| chat              | chat                 |
| chien             | chien                |

```python
from sklearn.metrics import accuracy_score

y_test = ['chat', 'chien', 'chat', 'chien']
y_pred = ['chat', 'chat', 'chat', 'chien']

accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy : {accuracy}")
```

**Résultat :** Accuracy : 0.75

#### Comment interpréter ce résultat ?

- Il y a 4 prédictions au total
- Le modèle a eu 3 bonnes réponses : chat, chat, chien

- Et 1 erreur : il a prédit **chat** alors que c’était **chien**

Donc :
`Accuracy = 3 / 4 = 0.75` -> soit 75 % de bonnes prédictions

## MSE (Erreur Quadratique Moyenne)

```python
from sklearn.metrics import mean_squared_error

# Exemple : pour un modèle de régression qui prédit le prix d'une maison,
# le MSE mesure à quel point les prédictions sont proches des vrais prix.
mse = mean_squared_error(y_test, y_pred)
print(f'MSE du modèle de prédiction : {mse}')
```

### Imaginons


| Sachet | Vrai nombre (`y_test`) | Devine (`y_pred`) |
| ------ | ---------------------- | ----------------- |
| A      | 10                     | 12                |
| B      | 20                     | 18                |
| C      | 30                     | 33                |


```python
from sklearn.metrics import mean_squared_error

# Vraies valeurs (nombre réel de bonbons)
y_test = [10, 20, 30]

# Prédictions du modèle (devinettes de l'élève)
y_pred = [12, 18, 33]

# Calcul du MSE
mse = mean_squared_error(y_test, y_pred)
print(f"MSE : {mse}")
```

**Résultat :** MSE : 4.6666

#### Que veut dire ce MSE = 4.67 ?

- Cela veut dire que, en moyenne, l'élève se trompe de √4.67 ≈ 2.16 bonbons.

- Le MSE est une moyenne des carrés des erreurs :
(12−10)² + (18−20)² + (33−30)² = 4 + 4 + 9 = 17,
puis 17 / 3 = 5.67


| Valeur du MSE | Interprétation                           |
| ------------- | ---------------------------------------- |
| 0             | Prédictions parfaites                    |
| Faible        | Le modèle est précis                     |
| Élevée        | Le modèle se trompe souvent ou fortement |


## Classification Report

Fournit les scores de précision, rappel et F1-score

F1-score = moyenne harmonique entre la précision (precision) et le rappel (recall)

```python
from sklearn.metrics import classification_report

print(classification_report(y_test, y_pred))
```

### Imaginons

Contexte : Le modèle doit deviner si un animal est un chat ou un chien.

```python
from sklearn.metrics import classification_report

y_test = ['chat', 'chien', 'chat', 'chien']
y_pred = ['chat', 'chat', 'chat', 'chien']

# Affiche les metrics de chaque classe
print(classification_report(y_test, y_pred))
```

**Résultat affiché :**

```
              precision    recall  f1-score   support

        chat       0.67      1.00      0.80         2
       chien       1.00      0.50      0.67         2

    accuracy                           0.75         4
   macro avg       0.83      0.75      0.73         4
weighted avg       0.83      0.75      0.73         4
```

### Comment lire ce résultat ?

- chat :
    - precision = 0.67 → Le modèle a dit "chat" 3 fois, mais il avait raison 2 fois.
    - recall = 1.00 → Tous les vrais chats ont bien été reconnus.

- chien :
    - precision = 1.00 → À chaque fois que le modèle a dit "chien", c'était juste.
    - recall = 0.50 → Il n’a reconnu qu’1 chien sur 2.

### En gros

| Terme     | Analogie simple                                                   |
| --------- | ----------------------------------------------------------------- |
| Precision | **Quand tu dis "chat", as-tu souvent raison ?**                   |
| Recall    | **As-tu bien reconnu tous les chats ?**                           |
| F1-Score  | **Es-tu globalement bon à la fois pour reconnaître et prédire ?** |
| Support   | **Combien d’exemples de cette classe avaient-on vraiment ?**      |


## Matrice de Confusion

```python
from sklearn.metrics import confusion_matrix

# Permet de voir où le modèle s'est trompé (ex : a dit "banane" au lieu de "pomme")
print(confusion_matrix(y_test, y_pred))
```

### Exemple 

```python
from sklearn.metrics import confusion_matrix

y_test = ['chat', 'chien', 'chat', 'chien']
y_pred = ['chat', 'chat', 'chat', 'chien']

print(confusion_matrix(y_test, y_pred, labels=['chat', 'chien']))
```

**Résultat affiché :**

```
[[2 0]
 [1 1]]
```

|                | Prédit **chat** | Prédit **chien** |
| -------------- | --------------- | ---------------- |
| Vrai **chat**  | 2 (✔️)          | 0 (❌)            |
| Vrai **chien** | 1 (❌)           | 1 (✔️)           |

- 2 chats bien prédits (en haut à gauche)
- 1 chien mal prédit comme chat (en bas à gauche)
- 1 chien bien prédit (en bas à droite)

## R² Score (coefficient de détermination)

```python
from sklearn.metrics import r2_score

# Le R² est principalement utilisé pour la régression.
# Exemple : prédire le prix d’une voiture selon son âge et son kilométrage.
try:
    r2 = r2_score(y_test, y_pred)
    print(f"R² Score : {r2}")
except Exception as e:
    print("Erreur lors du calcul du R² :", e)
```

:::caution Attention
Le R² n’est **pas adapté** aux modèles de classification (comme "chat ou chien").
Il est utile pour les problèmes de **régression** (valeurs continues, comme un prix ou une température).
:::

#### Imaginons

```python
from sklearn.metrics import r2_score

# Supposons :
y_test = [10000, 9500, 9000, 8500]  # prix réels
y_pred = [9800, 9400, 9100, 8700]   # prix prédits par le modèle

score = r2_score(y_test, y_pred)
print(f"R² Score : {score:.2f}")
```

**Résultat affiché :** R² Score : 0.96


#### En gros

| R² Score              | Signification simplifiée                                |
|-----------------------|---------------------------------------------------|
| 1.0              | Prédiction parfaite
| ~0.9             | Excellente prédiction
| ~0.5             | Le modèle a du mal à expliquer les données
| 0             | Aussi nul qu'une prédiction aléatoire
| < 0             | Le modèle est pire que deviner au hasard

## Petit résumé des cas d’usage

| Métrique              | Quand l’utiliser ?                                |
|-----------------------|---------------------------------------------------|
| Accuracy              | Classification simple                            |
| MSE                   | Régression (valeurs continues)                   |
| Classification Report | Classification multi-classes                     |
| Confusion Matrix      | Diagnostic d’erreurs de classification           |
| R² Score              | Régression uniquement                            |

Tu veux aussi que je t’aide à créer une version avec des boutons interactifs ou graphiques avec `plotly` ou `matplotlib` ?
