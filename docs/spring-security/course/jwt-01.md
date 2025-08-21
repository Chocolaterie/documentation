---
sidebar_position: 1
---

# JWT

## Dépendances

```
// Jwt
implementation 'io.jsonwebtoken:jjwt-api:0.12.6'
runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.12.6'
runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.12.6'
```

## Générer un token

```java
// Pour genere un token
// -- la date ou ca été crée (IssueAt)
// -- une date d'expiration (Expiration)
// -- une donnée subjectif (Subject)
// -- l'algo pour crypter (HS256)
// -- la clé secrête

// -- temps de vie du token
Date tokenLifetime = new Date(System.currentTimeMillis() + 1000 * 60 * 24);

// Le code qui genere le token
String token = Jwts.builder()
    .setSubject("quelquun@gmail.com")
    .issuedAt(new Date(System.currentTimeMillis()))
    .setExpiration(tokenLifetime)
    .signWith(getKey(), SignatureAlgorithm.HS256)
    .compact();
```

## Tester un token

```java
// Récupérer le token dans le header authorization
// On substring 7 caractères car le header contient "Bearer tontoken"
String token = authorization.substring(7);

try {
    Claims claims = Jwts.parser()
            .setSigningKey(getKey()).build()
            .parseClaimsJws(token)
            .getBody();
    
    
    // -- récupérer la date d'expiration
    Function<Claims, Date> expirationFunction = Claims::getExpiration;
    Date expirationData = expirationFunction.apply(claims);
    
 } catch (Exception e) {
            // Si la date d'expiration est depassé alors
            // Si exception jwt de type expiration
            if (e instanceof ExpiredJwtException){
                return "Token expiré";
            }

            // Si token malformé
            if (e instanceof MalformedJwtException){
                return "Token malformé";
            }

            return "Erreur inconnue";
        }

return "Token valide";
```

![Diagram](img/ex_rest_authorization_1.png)
