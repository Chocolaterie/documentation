---
sidebar_position: 2
---

# TypeScript avec Node.js

## Objectifs

- Comprendre l’intérêt de TypeScript dans un projet Node.js
- Savoir configurer un environnement TypeScript minimal
- Découvrir les types de base, la compilation et l’exécution

## Prérequis

- Node.js installé
- Connaissances de base en JavaScript
- Avoir un éditeur adapté (comme VSCode)

### 1. Initialisation du projet

```bash
mkdir cours-typescript-node
cd cours-typescript-node
npm init -y
```

### 2. Installation des dépendances

```bash
npm install --save-dev typescript @types/node
```

### 3. Génération du fichier `tsconfig.json`

```bash
npx tsc --init
```

Configuration minimale recommandée dans `tsconfig.json` :

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

## Structure recommandée

```
monprojet/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
```

## Exemple simple de code TypeScript

Dans `src/index.ts` :

```ts
function greet(name: string): string {
  return `Bonjour, ${name} !`;
}

console.log(greet("TypeScript"));
```

## Transpilation

```bash
npx tsc
```

Les fichiers transpilés sont générés dans `dist/`.


Transpiler individuelement:

```bash
npx tsc src/unfichier .ts --outDir dist
```

## Exécution

```bash
node dist/index.js
```

## Aller plus loin (bonus)

- Définir des types avec `interface`
- Ajouter un script dans `package.json` :

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

- Utiliser des fonctions `async`/`await`
- Ajouter un linter (ex. ESLint) et Prettier

## Résumé

Vous êtes maintenant capables de :

- Configurer TypeScript dans un projet Node.js
- Compiler et exécuter du code TypeScript
- Travailler avec les types de base
