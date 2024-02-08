---
sidebar_position: 4
---

# TP Spring REST Et Angular

## Etape 1 (Web Service)

- Crée un package qui va contenir le contrôleur du service web (par exemple : ihm.rest).

- Ajoute le contrôleur MovieRestController qui aura l'annotation @RestController.

- Commence par créer une route qui sélectionne un film par son id et retourne le Film en question. Voici un exemple :

```java
@GetMapping
Movie getMovieById(){
    return // Votre film;
}
```

- Vous pouvez donc en déduire que par défaut, **les contrôleurs REST** retournent les objets au format JSON, ce qui est testable via un navigateur.

Une fois que vous avez compris cela, assurez-vous que ce **RestController** possède toutes les routes nécessaires pour reproduire ce que nous avions en **Front-end**, mais en version **Web Service JSON**

## Etape 2 (Angular)

- Créer un projet angular (version LTS)

- Creer une page qui affiche la liste des films

- La doc : https://angular.io/start

### Tips

- Il faut recréer le model Movie avec ses associatons cotés Angular en Typescript (pas d'annotations ou ORM)
- Une page sera un composant (ng-generate-page) : https://angular.io/guide/component-overview
- Les données du Back (Spring web) vont être récupérer via un Service angular : https://angular.io/tutorial/tour-of-heroes/toh-pt4
- Utiliser le ngFor pour boucler la liste des films récupérer : https://guide-angular.wishtack.io/angular/composants/ngfor