"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[2004],{1252:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const r={sidebar_position:3},a="TP Spring DAO",l={id:"spring/tp/tp-m05",title:"TP Spring DAO",description:"Etape 1",source:"@site/docs/spring/tp/tp-m05.md",sourceDirName:"spring/tp",slug:"/spring/tp/tp-m05",permalink:"/documentation/docs/spring/tp/tp-m05",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/tp/tp-m05.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TP Spring Web - Partie 05",permalink:"/documentation/docs/spring/tp/tp-m04-05"},next:{title:"TP Spring REST Et Angular",permalink:"/documentation/docs/spring/tp/tp-bonus"}},o={},c=[{value:"Etape 1",id:"etape-1",level:2},{value:"Etape 2",id:"etape-2",level:2},{value:"Etape 3",id:"etape-3",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tp-spring-dao",children:"TP Spring DAO"}),"\n",(0,t.jsx)(n.h2,{id:"etape-1",children:"Etape 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Installe Spring Data et le connecteur MySQL dans Gradle."}),"\n",(0,t.jsx)(n.li,{children:'Cr\xe9e la base de donn\xe9es "film" dans Workbench.'}),"\n",(0,t.jsx)(n.li,{children:"Configure les param\xe8tres de connexion et Spring Data dans le fichier application.properties."}),"\n",(0,t.jsx)(n.li,{children:"Ajoute les annotations appropri\xe9es dans les entit\xe9s, avec les relations n\xe9cessaires."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Objectif : Assurer que le serveur d\xe9marre sans erreur et que les tables et les relations sont correctement r\xe9pliqu\xe9es dans la base de donn\xe9es."}),"\n",(0,t.jsx)(n.h2,{id:"etape-2",children:"Etape 2"}),"\n",(0,t.jsx)(n.p,{children:"Ins\xe9rer des fausses donn\xe9es en bases :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utilise les fichiers SQL fournis comme point de d\xe9part, en les adaptant si n\xe9cessaire."}),"\n",(0,t.jsxs)(n.li,{children:["Prends le temps de g\xe9n\xe9rer toi-m\xeame les donn\xe9es en utilisant des outils comme ",(0,t.jsx)(n.a,{href:"https://www.mockaroo.com",children:"https://www.mockaroo.com"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Rappel important",type:"warning",children:[(0,t.jsxs)(n.p,{children:["N'oubliez pas d'inclure ces lignes dans le fichier ",(0,t.jsx)(n.strong,{children:"application.properties"})," afin d'ex\xe9cuter le script data.sql et d'alimenter la base de donn\xe9es"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Alimenter la base de donn\xe9es via le data.sql\nspring.jpa.defer-datasource-initialization=true\nspring.sql.init.mode=always\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Ensuite :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cr\xe9er les interfaces DAO."}),"\n",(0,t.jsx)(n.li,{children:"Impl\xe9menter les classes JPA \xe0 partir de tes interfaces DAO."}),"\n",(0,t.jsx)(n.li,{children:"Utiliser un profil dans l'injection (par exemple : jpa)."}),"\n",(0,t.jsx)(n.li,{children:"Impl\xe9menter la couche de service non mock\xe9e (service utilisant tes interfaces DAO)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"etape-3",children:"Etape 3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utiliser et faire fonctionner tes controlleurs et vues"}),"\n",(0,t.jsx)(n.li,{children:"Dans tes controlleurs tu appel uniquement ton Metier/BLL donc le Service"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);