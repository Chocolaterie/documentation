---
sidebar_position: 2
---

# Spring Rest API (Back)

## Controlleur API

Il faut utiliser annotation `@RestController`

Le retour de tes routes correspondent au retour JSON

Donc tout ce que tu retourne est automatiquement mappé en JSON

Tout les controlleurs Rest dans un package api (pour bien s'organiser)


## Swagger

Swagger un outil qui vous permet de tester vos **endpoint** (les url) sous forme d'interface web documenté

- Sur Postman il faut écrire les urls avec les paramètres manuellement
- Alors que sur swagger il va lister toutes tes urls par des boutons pour les executer

Dépendance dans **build.gradle** (Spring boot 3):

```
// Swagger
implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'
```

:::warning ne pas oublier

Sur Eclipse faire **Gradle -> Refresh Gradle Project** 

:::

Pour consulter votre Swagger avec l'url par défaut :

http://localhost:8080/swagger-ui/index.html

## API V1 (exemple)

Package **api.v1** au moins quelque part

Exemple de controlleur **Rest** versionné : 

```java
@RestController
@RequestMapping("/api/v1/")
public class MoverRestController
```

Exemple si je voulais récupérer la liste des films dans l'url /api/v1/movies je peux avoir cette déclaration de route (endpoint) :

```java
@GetMapping("movies")
public List<Movie> getAllMovies(){
    // le code qui retourne une liste de films
    return ...;
}
```

Si je voulais tester sur navigateur en localhost : `http://localhost:8080/api/v1/movies`