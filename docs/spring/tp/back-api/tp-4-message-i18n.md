---
sidebar_position: 4
---

# TP Store API - Partie 4 Messages

**Durée estimée : 30min - 1h**

---

## Énoncé

Dans cette partie, vous allez ajouter la gestion des **messages métier** associés aux traitements dans vos **Services**.

Le modèle de réponse doit contenir les éléments suivants :
- **code** : le code de statut métier
- **message** : le message associé (multilingue)
- **data** : les données retournées (ex. un article ou une liste d'articles)

Vous devez mettre en place un mécanisme permettant de traduire les messages en **français** et en **anglais**.

## Mise en place de l'internationalisation

Pour gérer la traduction des messages métier, vous pouvez vous aidez des classes utilitaire proposé ci-dessous:

**LocaleConfig.java**

```java
@Configuration
public class LocaleConfig
{
    @Bean
    public LocaleResolver localeResolver() {
        // Locale forcée en anglais
        return new FixedLocaleResolver(Locale.ENGLISH);
    }
}
```

**LocaleHelper.java**
```java
@Component
public class LocaleHelper {

    private final MessageSource messageSource;

    public LocaleHelper(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public String i18n(String key){
        return messageSource.getMessage(key, null, LocaleContextHolder.getLocale());
    }
}
```

**Exemple d'utilisation :**

```java
// Attention dépend si injection @Autowired ou par constructeur)
@Autowired
LocaleHelper lH;

...

String monMessageTraduit = lH.i18n("La_Cle_De_Mon_Message");

```

## Messages attendus

:::info
Les exemples ci-dessous sont fournis en français.  
À vous d'ajouter les équivalents en anglais dans vos fichiers de traduction.
:::

### getAll
- Réponse : **La liste des articles a été récupérée avec succès**

### getId
- Si l'article est trouvé : **L'article a été récupéré avec succès**
- Si l'article n'est pas trouvé : **L'article n'existe pas**

### delete
- Si l'article est supprimé : **L'article a été supprimé avec succès**
- Si l'article n'existe pas : **L'article n'existe pas**

### save
- Si l'id n'existe pas : **Article créé avec succès**
- Si l'id existe déjà : **Article modifié avec succès**