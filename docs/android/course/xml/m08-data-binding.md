---
sidebar_position: 7
---

# Data Binding (MVVM)

MVVM signifie Model-View-ViewModel. C'est un modèle d'architecture logicielle qui sépare l'interface utilisateur de la logique d'application pour rendre le code plus organisé et maintenable.

## Installation

Il faut **activer** le **DataBinding** dans gradle !

Dans le build.gradle :

```
buildFeatures {
    dataBinding = true
}
```

## ViewModel

Le ViewModel est une classe utilisée pour contenir et gérer la logique d'un écran dans une application Android. Il ne contient aucun rendu visuel, uniquement des calculs et des données nécessaires à l'affichage, séparant ainsi la logique de l'interface utilisateur.

### Exemple d'un ViewModel

```kotlin
class CounterViewModel : ViewModel() {

    val counter = MutableLiveData<Int>()

    init {
        counter.value = 0
    }

    fun plusUn() {
        counter.value = (counter.value)?.plus(1)
    }
}
```

On remarque :
- **Un héritage** : Pour un fonctionnement propre à Android
- **MutableLiveData** : Qui sert à utiliser le pattern Observable pour notifier des changements


## Dans le XML

La page XML doit commencer par la balise `<layout>`. C'est une obligation pour indiquer que cette page pourra utiliser le **DataBinding**

```xml
<layout xmlns:android="http://schemas.android.com/apk/res/android">
```

### Pour ajouter un ViewModel dans le XML

Ensuite, si vous souhaitez ajouter des ViewModel dans la page (donc après la balise `<layout>`), vous pouvez utiliser la balise `<variable>` pour chaque ViewModel. Attention, les balises `<variable>` doivent être contenues dans la balise `<data>` (qui elle-même est dans `<layout>`). Par exemple :

```xml
<data>
    <variable
        name="monViewModel"
        type="com.xxx.CounterViewModel" />
</data>
```

Donc à la fin, le début de votre page xml peurrais ressembler à ca :

```xml
<layout xmlns:android="http://schemas.android.com/apk/res/android">

    <data>
        <variable
            name="monViewModel"
            type="com.xxx.CounterViewModel" />
    </data>

     <!-- Vos composants / designs -->
     ...
</layout>
```

## Dans une Activity

```kotlin
class MonActivity : ComponentActivity() {

    lateinit var viewBinding : ActivityMainBinding;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Charger la vue en mode DataBinding
        viewBinding = DataBindingUtil.setContentView(this, R.layout.activity_main);

        // Spécifier view model par défaut (vide) à la vue
        var counterViewModel = CounterViewModel(this);
        viewBinding.monViewModel = counterViewModel;
    }
}
```

On remarque :
- **SetContentView** se vois remplacer par **DataBindingUtil.setContentView** pour exploiter le DataBinding sur les vues
- Je décide ici d'instancier moi même un **ViewModel** pour le rattacher dans la vue

## Exploiter la ViewModel

Maintenant que le ViewModel est connecté à la page, vous pourrais l'exploiter comme ceci par exemple :

```xml
    ...
     <!-- One-Way Binding -->
    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@{monViewModel.counter}"
    />

     <!-- Two-Way Binding -->
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@={monViewModel.counter}"
    />
     ...
</layout>
```

- **One-Way Binding** : Liaison unidirectionnelle. Le XML peut lire la valeur d'une propriété définie dans le ViewModel ou un autre objet de données, mais il ne peut pas la modifier

- **Two-Way Binding** : Liaison bidirectionnelle. Le XML peut lire et modifier la valeur d'une propriété. Les modifications apportées à l'interface utilisateur sont automatiquement reflétées dans le ViewModel, et vice versa
