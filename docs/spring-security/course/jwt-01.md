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
   // Outil pour récupérer le token (déchiffrer)
    JwtParser jwtParser = Jwts.parser().setSigningKey(key).build();

    // -- récupérer les claims de mon token (claims => toutes les info)
    Claims claims = jwtParser.parseSignedClaims(token).getBody();
    
    // Récupérer la date
    // 1: Version abstraite
    // Function<Claims, Date> expirationFunction = Claims::getExpiration;
    // Date expirationDate = expirationFunction.apply(claims);
    // 2: Version explicite
    Date expirationDate = claims.getExpiration();
    
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

## Externaliser l'accès à la clé secrète

Voici un exemple pour déporter l'accès à la clé secrète avec la valeur de la clé stocker dans un fichier config

```java
/**
 * Récupérer la valeur de app.jwt.secret dans application.properties
 */
@Value("${app.jwt.secret}")
private String SECRET_KEY;

private Key getSecretKey() {
    // convertir un string en base 64
    byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
    // convertir une base 64 en Key
    Key key = Keys.hmacShaKeyFor(keyBytes);

    return key;
}
```

Evidement cela veut dire que dans votre application.properties (dans notre cas en tout cas) vous avez bien :

```
app.jwt.secret=69636e783529213d5722613b2b336c793371666524684a3445226e5573
```
