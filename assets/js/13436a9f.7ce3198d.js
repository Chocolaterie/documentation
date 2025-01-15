"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7632],{5532:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(7624),l=i(2172);const t={sidebar_position:10},r="TP - Meal (Partie 1)",a={id:"java/tp/tp-meal-1",title:"TP - Meal (Partie 1)",description:"Objectifs du TP",source:"@site/docs/java/tp/tp-meal-1.md",sourceDirName:"java/tp",slug:"/java/tp/tp-meal-1",permalink:"/documentation/docs/java/tp/tp-meal-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/tp/tp-meal-1.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"TP - Meal (Partie 1)",permalink:"/documentation/docs/java/tp/tp-observable-lv2"},next:{title:"Java EE",permalink:"/documentation/docs/category/java-ee"}},c={},d=[{value:"Objectifs du TP",id:"objectifs-du-tp",level:2},{value:"Instructions",id:"instructions",level:2},{value:"1. D\xe9finir les Entit\xe9s",id:"1-d\xe9finir-les-entit\xe9s",level:3},{value:"2. Couche DAO (<strong>Data Access Object</strong>)",id:"2-couche-dao-data-access-object",level:3},{value:"3. Couche Service",id:"3-couche-service",level:3},{value:"4. Interface Utilisateur (IHM)",id:"4-interface-utilisateur-ihm",level:3},{value:"5. Consignes suppl\xe9mentaires",id:"5-consignes-suppl\xe9mentaires",level:3},{value:"6. Crit\xe8res de Validation",id:"6-crit\xe8res-de-validation",level:3},{value:"Partie 1",id:"partie-1",level:2},{value:"Schema UML (version 1)",id:"schema-uml-version-1",level:3},{value:"Main",id:"main",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tp---meal-partie-1",children:"TP - Meal (Partie 1)"}),"\n",(0,s.jsx)(n.h2,{id:"objectifs-du-tp",children:"Objectifs du TP"}),"\n",(0,s.jsx)(n.p,{children:"Dans ce TP, vous allez apprendre \xe0 :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cr\xe9er une application structur\xe9e en couches ",(0,s.jsx)(n.strong,{children:"BO"}),", ",(0,s.jsx)(n.strong,{children:"DAO"}),", ",(0,s.jsx)(n.strong,{children:"Service"})," et ",(0,s.jsx)(n.strong,{children:"IHM"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Manipuler des concepts de base tels que les entit\xe9s, les relations, et la gestion de la persistance des donn\xe9es."}),"\n",(0,s.jsxs)(n.li,{children:["Appliquer ces concepts pour g\xe9rer des recettes (",(0,s.jsx)(n.code,{children:"Meal"}),") avec leurs ingr\xe9dients (",(0,s.jsx)(n.code,{children:"Ingredient"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsx)(n.h3,{id:"1-d\xe9finir-les-entit\xe9s",children:"1. D\xe9finir les Entit\xe9s"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cr\xe9ez deux classes principales dans la couche BO (",(0,s.jsx)(n.strong,{children:"Business Object"}),") :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Meal"})," : repr\xe9sente un repas. Les attributs incluront :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," : Identifiant unique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," : Nom du repas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ingredients"})," : Liste des ingr\xe9dients associ\xe9s."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ingredient"})," : repr\xe9sente un ingr\xe9dient. Les attributs incluront :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," : Identifiant unique."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," : Nom de l'ingr\xe9dient."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"quantity"})," : Quantit\xe9 de l'ingr\xe9dient utilis\xe9e dans un repas."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"2-couche-dao-data-access-object",children:["2. Couche DAO (",(0,s.jsx)(n.strong,{children:"Data Access Object"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Impl\xe9mentez une classe ",(0,s.jsx)(n.code,{children:"MealDAO"})," qui aura les responsabilit\xe9s suivantes :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stocker une liste de repas en m\xe9moire."}),"\n",(0,s.jsx)(n.li,{children:"Ajouter un nouveau repas."}),"\n",(0,s.jsx)(n.li,{children:"R\xe9cup\xe9rer un repas par son identifiant."}),"\n",(0,s.jsx)(n.li,{children:"Supprimer un repas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-couche-service",children:"3. Couche Service"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Impl\xe9mentez une classe ",(0,s.jsx)(n.code,{children:"MealService"})," qui utilisera ",(0,s.jsx)(n.code,{children:"MealDAO"})," pour g\xe9rer la logique m\xe9tier. Les fonctionnalit\xe9s incluront :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ajouter un nouveau repas avec des ingr\xe9dients."}),"\n",(0,s.jsx)(n.li,{children:"Lister tous les repas."}),"\n",(0,s.jsx)(n.li,{children:"R\xe9cup\xe9rer les d\xe9tails d'un repas sp\xe9cifique."}),"\n",(0,s.jsx)(n.li,{children:"Supprimer un repas par son identifiant."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-interface-utilisateur-ihm",children:"4. Interface Utilisateur (IHM)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["D\xe9veloppez une simple interface utilisateur textuelle ou graphique permettant \xe0 l'utilisateur de :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ajouter un repas avec des ingr\xe9dients."}),"\n",(0,s.jsx)(n.li,{children:"Voir la liste des repas disponibles."}),"\n",(0,s.jsx)(n.li,{children:"Afficher les d\xe9tails d'un repas sp\xe9cifique."}),"\n",(0,s.jsx)(n.li,{children:"Supprimer un repas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-consignes-suppl\xe9mentaires",children:"5. Consignes suppl\xe9mentaires"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Structure"})," : Respectez la s\xe9paration des couches pour une meilleure lisibilit\xe9 et maintenabilit\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Documentation"})," : Ajoutez des commentaires clairs pour expliquer le fonctionnement de chaque classe et m\xe9thode."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-crit\xe8res-de-validation",children:"6. Crit\xe8res de Validation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Les entit\xe9s sont correctement d\xe9finies et respectent les relations entre ",(0,s.jsx)(n.code,{children:"Meal"})," et ",(0,s.jsx)(n.code,{children:"Ingredient"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"La persistance des donn\xe9es est g\xe9r\xe9e via la couche DAO."}),"\n",(0,s.jsx)(n.li,{children:"La logique m\xe9tier est centralis\xe9e dans la couche Service."}),"\n",(0,s.jsx)(n.li,{children:"L'utilisateur peut interagir avec le programme via l'IHM pour accomplir toutes les actions requises."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"partie-1",children:"Partie 1"}),"\n",(0,s.jsxs)(n.p,{children:["Dans un premier temps, commencez par impl\xe9menter les deux fonctionnalit\xe9s principales : ",(0,s.jsx)(n.code,{children:"getAll"})," et ",(0,s.jsx)(n.code,{children:"getById"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["D\xe9butez avec la couche ",(0,s.jsx)(n.strong,{children:"BO"})," et ",(0,s.jsx)(n.strong,{children:"DAO"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Continuez avec la couche ",(0,s.jsx)(n.strong,{children:"Service"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Terminez par l'impl\xe9mentation de l'IHM, que ce soit en console ou avec une interface graphique."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{children:(0,s.jsx)(n.strong,{children:"A LIRE"})}),(0,s.jsx)(n.p,{children:"Pour l'instant, la gestion des ingr\xe9dients n'est pas encore prise en charge."})]}),"\n",(0,s.jsx)(n.h3,{id:"schema-uml-version-1",children:"Schema UML (version 1)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:i(1544).c+"",width:"532",height:"316"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"main",children:"Main"}),"\n",(0,s.jsx)(n.p,{children:"Voici le main d\xe9j\xe0 d\xe9velopp\xe9, d\xe9brouillez-vous pour qu'il fonctionne et que les prints s'affichent bien dans la console."}),"\n",(0,s.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,s.jsx)(n.p,{children:"VOUS NE DEVEZ PAS TOUCHER AU CONTENU DU CODE DANS LE MAIN"})}),"\n",(0,s.jsxs)(n.p,{children:["Le package sera nomm\xe9 : ",(0,s.jsx)(n.code,{children:"fr.eni.tp"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class Main {\n\n    public static void main(String[] args) {\n        // Initialisation de la couche DAO et Service\n        MealDAO mealDAO = new MealDAO();\n        MealService mealService = new MealService(mealDAO);\n\n        // Ajout de quelques repas via le service\n        mealService.addMeal(new Meal(1, "Pizza"));\n        mealService.addMeal(new Meal(2, "Salade"));\n        mealService.addMeal(new Meal(3, "P\xe2tes"));\n\n        // Tester la fonctionnalit\xe9 getAll\n        System.out.println("=== Liste de tous les repas ===");\n        for (Meal meal : mealService.getAll()) {\n            System.out.println(meal);\n        }\n\n        // Tester la fonctionnalit\xe9 getById\n        System.out.println("\\n=== Recherche d\'un repas par ID ===");\n        int testId = 2;\n        Meal foundMeal = mealService.getById(testId);\n        if (foundMeal != null) {\n            System.out.println("Repas trouv\xe9 pour l\'ID " + testId + " : " + foundMeal);\n        } else {\n            System.out.println("Aucun repas trouv\xe9 pour l\'ID " + testId);\n        }\n\n        // Tester un ID qui n\'existe pas\n        int invalidId = 5;\n        Meal notFoundMeal = mealService.getById(invalidId);\n        if (notFoundMeal != null) {\n            System.out.println("Repas trouv\xe9 pour l\'ID " + invalidId + " : " + notFoundMeal);\n        } else {\n            System.out.println("Aucun repas trouv\xe9 pour l\'ID " + invalidId);\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1544:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp_meal_01_01-9e52a0b52f8059866b20295c7dfcc8a8.png"},2172:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>r});var s=i(1504);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);