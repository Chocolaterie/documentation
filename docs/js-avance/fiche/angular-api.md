---
id: api-angular
title: API sur Angular
sidebar_label: API sur Angular
description: API sur Angular
sidebar_position: 6
---

## Base

Sous Angular, pour appeler des API, il faut créer un **service** qui retourne un **Observable**.

Vous pouvez générer un service avec la commande suivante :

```bash
ng generate service dossier/mon-service
```

Pour suffixer automatiquement le nom avec `Service`, pensez à configurer cela dans le fichier `angular.json`.

---

Une fonction utilisant un `Observable` (équivalent à une tâche asynchrone, pour vulgariser) ressemble à ceci :

```ts
getArticles(): Observable<any> {
  return this.http.get<any>("http://localhost:3000/articles");
}
```

Pour utiliser `HttpClient`, vous devez l’injecter dans le constructeur du service :

```ts
constructor(private http: HttpClient) {}
```

:::warning Attention

N’oubliez pas d’ajouter le provider `HttpClient` dans le fichier `app.config.ts` :

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideHttpClient(),
  ]
};
```

:::


## Injecter le service dans un composant

Exemple :

```ts
export class ArticleListComponent {
  articles: any[] = [];

  // Injection de ArticleService
  constructor(private articleService: ArticleService) {}
}
```

## Appeler un Observable

Exemple d’appel avec `.subscribe()` :

```ts
this.articleService.getArticles().subscribe({
  next: (response) => {
    console.log(response);
  },
  error: (err) => {
    console.error(err);
  }
});
```
