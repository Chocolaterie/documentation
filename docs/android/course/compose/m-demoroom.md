---
sidebar_position: 10
---

# Room


## Dépendances

Dans le build.gradle section plugins :

`id("com.google.devtools.ksp") version "1.9.20-1.0.14"`

Exemple: 


```
plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    id("com.google.devtools.ksp") version "1.9.20-1.0.14"
}
```

Et ces 3 dépendances :

```
// ROOM
implementation("androidx.room:room-runtime:2.6.0")
ksp("androidx.room:room-compiler:2.6.0")
implementation("androidx.room:room-ktx:2.6.0")
```

:::warning Attention

Le **ksp** c'est un utilitaire qui vient de `id("com.google.devtools.ksp") version "1.9.20-1.0.14"` qu'on a mis en haut. il faut faire un **SyncNow** pour qu'il l'installe

:::

## Entity

Exemple déclaration d'une entité

```kt
@Entity
data class Flan(
    @PrimaryKey(autoGenerate = true) var id : Long = 0,
    var name : String = "",
    var klg : Float = 424.24f) {
}
```

## DAO

Exemple de DAO. Attention c'est une interface !

```kt
@Dao
interface FlanDAO {

    @Insert
    suspend fun insertFlan(flan: Flan)

    @Query("SELECT * FROM Flan")
    fun selectAll() : List<Flan>
}
```

Attention ne pas oublié d"inject la DAO et l'entité dans AppDatabase :

Entity Injectée:

```kt
@Database(entities = [Flan::class], version = 1)
```

DAO Injectée: 

```kt
 abstract fun flanDAO() : FlanDAO
```

## Exemple d'un AppDatabase

```kt
@Database(entities = [Flan::class], version = 1)
abstract class AppDatabase : RoomDatabase() {

    abstract fun flanDAO() : FlanDAO

    companion object {

        var INSTANCE: AppDatabase? = null;

        fun getInstance(context: Context): AppDatabase {
            if (INSTANCE == null) {

                INSTANCE = Room.databaseBuilder(context, AppDatabase::class.java, "MyBdd.db")
                    .fallbackToDestructiveMigration().build()
            }
            return INSTANCE!!
        }
    }
}
```

## Appel Tâche Asynchrone

Toutes les requêtes doivent être exécutées sur un thread en dehors du thread principal (UI thread), elles doivent donc être appelées dans une **Coroutine**.

En général, les fonctions du **DAO** doivent être définies avec le mot-clé **`suspend`** pour indiquer qu'elles sont des fonctions suspendues et qu'elles peuvent être appelées de manière asynchrone dans une coroutine.


Exemple d'utilisation avec un MutableStateFlow :

```kt
// Récupérer la DAO via la AppDatabase
val flanDAO = AppDatabase.getInstance(this).flanDAO();

// Mettre à jour la liste de flan écoutable DANS UNE COROUTINE
lifecycleScope.launch {
    flans.value = flanDAO.selectAll()
}
```