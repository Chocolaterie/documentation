---
sidebar_position: 3
---

# Manières d'injecter

3 façons d'injecter:

- getBean
- mettre la classe à injecter dans un Constructeur
- @Autowired

## getBean

Si on voulais récupérer une injection(une instance singleton) avec la manière getBean, exemple :

```java
ArticleManager articleManager = ctx.getBean(ArticleManager.class);
```


## Injection par constructeur

Si on voulais récupérer une injection(une instance singleton) à travers un constructeur :

```java
public ArticleController(ArticleManager articleManager) {
    this.articleManager = articleManager;
}
```

:::warning Attention !!!

La classe qui a son constructeur doit être elle-même injectable pour être dans le context de Spring (context récursive)

:::

## Injection par annotation Autowired

Si on voulais récupérer une injection(une instance singleton) graçe à l'annotation @Autowired :

```java
@Autowired
private ArticleManager articleManager;
```
