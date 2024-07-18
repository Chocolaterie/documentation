---
sidebar_position: 10
---

# Associer des champs

## ViewModel

Pour lier une classe avec des propriétés dans un formulaire, vous devez trouver un moyen d'associer les valeurs saisies dans chaque champ tout en observant les valeurs.

Plusieurs solutions s'offrent à vous, cependant voici une proposition 

#### Une classe model

```kotlin
data class Article(var title: String = "", var content : String = "") {

}
```

:::warning Attention au data class

**data class** permet d'avoir des extensions de fonction utiles pour compose

:::

#### Un View Model

```kotlin
class MonViewModel : ViewModel() {

    var article = MutableStateFlow(Article())
}
```

#### Dans le formulaire

Cette proposition qui va suivre est la version native sans fonctions utilitaires :

```kotlin
...

// Champ titre
TextField(value = article.title, onValueChange = { monViewModel.article.value = articleViewModel.article.value.copy(title = it) } )

// Champ content
TextField(value = article.content, onValueChange = { monViewModel.article.value = articleViewModel.article.value.copy(content = it) } )

...
```
