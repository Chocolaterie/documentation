---
sidebar_position: 8
---

# ListView et RecyclerView

Avec Jetpack Compose, il n'est pas nécessaire d'utiliser un élément spécifique comme `ListView` ou `RecyclerView`.

Les composants `Column` et `LazyColumn` vous permettent déjà d'afficher des éléments de manière similaire à une `ListView`.

Cependant, `LazyColumn` se rapproche davantage de `RecyclerView` car elle n'affiche pas les éléments qui sont hors écran, ce qui améliore les performances.


## Créer sa cellule/ligne

### Cellule simple 

Un exemple pour préparer une cellule de manière très simple (avec juste un `Text`) :

```kotlin
@Composable
fun MyListItem(item: String) {
    Text(
        text = item
    )
}
```

### Cellule plus personnalisée

On pourrait aussi ajouter un effet d'ombre avec d'autres attributs comme ceci :

```kotlin
@Composable
fun MyListItem(item: String) {
    Surface(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
            shadowElevation = 8.dp
    ) {
        Text(
            text = item,
            style = MaterialTheme.typography.titleSmall,
            modifier = Modifier.padding(16.dp)
        )
    }
}
```

## Afficher les cellules

On peut créer notre composant qui sera simplement un `LazyColumn`, affichant ligne par ligne notre `MyListItem` (la cellule) pour chaque élément dans ma `List<String> items` :

```kotlin
@Composable
fun MyList(items: List<String>) {
    LazyColumn {
        items(items) { item ->
            MyListItem(item)
        }
    }
}
```

## Prévisualiser

Comme d'habitude, on peut prévisualiser notre développement dans le design si on le souhaite

```kotlin
@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    DemoComposeAndroidTheme {
        MyList(items = listOf("Preview Item 1", "Preview Item 2", "Preview Item 3"))
    }
}
```