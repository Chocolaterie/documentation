---
sidebar_position: 7
---

# Data Binding (MVVM)

## ViewModel

Le ViewModel est une classe utilisée pour contenir et gérer la logique d'un écran dans une application Android. Il ne contient aucun rendu visuel, uniquement des calculs et des données nécessaires à l'affichage, séparant ainsi la logique de l'interface utilisateur.

### Exemple d'un ViewModel

```kotlin
class CounterViewModel : ViewModel() {

    val counter = MutableLiveData<Int>(0)
}
```

## Dans compose

Dans Compose, il est recommandé d'utiliser les `MutableState` pour le binding de valeur.

On peut convertir notre `MutableLiveData` en `MutableState` grâce à `observeAsState`.

Exemple :

```kotlin
// val counter est la version MutableState de counterViewModel.counter
val counter by counterViewModel.counter.observeAsState(0)
```

Donc, le composant entier qui afficherait le compteur dans un texte et un champ de saisie pour modifier le compteur pourrait ressembler à ceci :

```kotlin
@Composable
fun CounterScreen(counterViewModel: CounterViewModel) {
    val counter by counterViewModel.counter.observeAsState(0)

    Column(modifier = Modifier.padding(16.dp)) {
        Text(text = "Counter: $counter", style = MaterialTheme.typography.titleSmall)

        var text by remember { mutableStateOf(counter.toString()) }

        OutlinedTextField(
            value = text,
            onValueChange = { newValue ->
                text = newValue
                newValue.toIntOrNull()?.let { counterViewModel.counter.value = it }
            },
            label = { Text("Counter") }
        )
    }
}

```

## Dans une Activity

```kotlin
class CounterActivity : ComponentActivity() {

    // Déclarer le view model
    lateinit var counterViewModel: CounterViewModel;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Instancier le view model
        counterViewModel = CounterViewModel()

        enableEdgeToEdge()
        setContent {
            DemoComposeAndroidTheme {
                CounterScreen(counterViewModel)
            }
        }
    }
}
```