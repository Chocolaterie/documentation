---
sidebar_position: 2
---

# Spring Web

Les **qualifiers** peuvent remplacer les **profiles**, bien que les **profiles** soient plus adaptés à une utilisation paramétrable en amont

## Les url

Dexu types d'utilisations d'url sur sp^ring web avec **thymeleaf** :

### Request Param

**Dans le html :**

```
th:href="@{/monurl(param=${monobjet.id})}" 
```

**Resultat :**
 
```
/monurl?param=1
```

### Path variable

**Dans le html :**

```
th:href="@{'/monurl/' + ${monobjet.id}}"
```

**Resultat :**

```
/monurl/1
```