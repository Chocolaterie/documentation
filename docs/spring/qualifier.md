---
sidebar_position: 2
---

# Qualifier

Les **qualifiers** peuvent remplacer les **profiles**, bien que les **profiles** soient plus adaptés à une utilisation paramétrable en amont

## Exemple

Imaginons que nous avons ces implementations :

```java
public interface DAOArticle {
    List<String> getAll();
}

@Component("mock")
public class DAOArticleMockImpl implements DAOArticle {
    @Override
    public List<String> getAll() {
        ...
    }
}

@Component("mysql")
public class DAOArticleMySQLImpl implements DAOArticle {
    @Override
    public List<String> getAll() {
        ...
    }
}
```

L'utilisation du **@Qualifier** peut être utiliser ainsi:

```java
public class ArticleService {

    // Va injecter le bean ayant "mock" dans le @Component
    @Autowired
    @Qualifier("mock")
    private DAOArticle daoArticle;

    public void getAllArticle() {
        dAOArticle.getAll();
    }
}
```