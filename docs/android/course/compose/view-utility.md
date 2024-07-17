---
sidebar_position: 10
---

# Composants utilitaires

## AlertDialog

Il y a énormément de manières d'afficher une popup. Néanmoins, dans la méthode traditionnelle, voici ce qu'il faut retenir :

- Placer le composant `AlertDialog` dans une vue.
- Conditionner son existence avec une structure conditionnelle dans le Composable.
- En général, la structure conditionnelle va utiliser des états (par exemple, `MutableStateFlow`) pour savoir s'il faut afficher l'`AlertDialog`.

Exemple de code :

```kotlin
@Composable
fun Mypage() {
    val showDialog = remember { mutableStateOf(false) }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {

        Button(onClick = { showDialog.value = true }) {
            Text("Show Dialog")
        }

        if (showDialog.value) {
            AlertDialog(
                onDismissRequest = { showDialog.value = false },
                confirmButton = {
                    Button(onClick = { showDialog.value = false }) {
                        Text("OK")
                    }
                },
                title = { Text("Titre de la popup") },
                text = { Text("Notre message") }
            )
        }
    }
}
```

## AlertDialog (avancé)

Vous avez peut-être remarqué que dans l'exemple précédent, nous avons dû mettre en dur le titre et le texte de la popup. C'est embêtant si nous avons plusieurs popups différentes sur la page.

Pour contourner cela, nous pouvons créer une classe personnalisée qui sert de structure pour stocker :
- showDialog : indique si nous devons afficher la popup
- title : le titre de la popup
- message : le message dans la popup


La classe utilitaire :

```kotlin
class MyAlertDialogData(var showDialog: Boolean = false, var title : String = "", var message : String = "")
```

Modification de l'AlertDialog :

```kotlin
@Composable
fun Mypage(alertDialogData : MutableStateFlow<MyAlertDialogData>) {
    val alertDialogDataState by alertDialogData.collectAsState();

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {

        Button(onClick = { alertDialogDataState.value.showDialog = true }) {
            Text("Show Dialog")
        }

        if (alertDialogDataState.showDialog) {
            AlertDialog(
                onDismissRequest = { alertDialogDataState.value.showDialog = false },
                confirmButton = {
                    Button(onClick = { alertDialogDataState.value.showDialog = false }) {
                        Text("OK")
                    }
                },
                title = { Text(alertDialogDataState.value.title) },
                text = { Text(alertDialogDataState.value.message) }
            )
        }
    }
}
```