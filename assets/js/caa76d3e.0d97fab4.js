"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[3612],{1196:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(7624),t=r(2172);const s={sidebar_position:2},o="TP Eni Store API - MongoDB (Partie 2)",l={id:"spring-security/tp/tp-2-mongo",title:"TP Eni Store API - MongoDB (Partie 2)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/spring-security/tp/tp-2-mongo.md",sourceDirName:"spring-security/tp",slug:"/spring-security/tp/tp-2-mongo",permalink:"/documentation/docs/spring-security/tp/tp-2-mongo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring-security/tp/tp-2-mongo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TP Eni Store API (Partie 2 - Before)",permalink:"/documentation/docs/spring-security/tp/tp-2-before"},next:{title:"TP Eni Store API (Partie 2)",permalink:"/documentation/docs/spring-security/tp/tp-2"}},c={},d=[{value:"Enonce",id:"enonce",level:2},{value:"Architecture visuelle",id:"architecture-visuelle",level:2},{value:"Tester",id:"tester",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tp-eni-store-api---mongodb-partie-2",children:"TP Eni Store API - MongoDB (Partie 2)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 1H-2H"})}),"\n",(0,i.jsx)(n.h2,{id:"enonce",children:"Enonce"}),"\n",(0,i.jsx)(n.p,{children:"Nous allons r\xe9aliser un CRUD sur le mod\xe8le Article (\xe0 l'exception du POST)."}),"\n",(0,i.jsx)(n.p,{children:"Il sera n\xe9cessaire de cr\xe9er les \xe9l\xe9ments suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Article"})," : La classe ",(0,i.jsx)(n.strong,{children:"Article"})," dans le package ",(0,i.jsx)(n.strong,{children:"BO"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleDAO"})," : L'interface DAO Article pour le CRUD (findAll, findById, delete)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleDAOMongo"})," : L'impl\xe9mentation de l'interface ",(0,i.jsx)(n.strong,{children:"ArticleDAO"})," qui utilisera les donn\xe9es ",(0,i.jsx)(n.strong,{children:"NoSQL"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleMongoRepository"})," : Le repository Mongo pour l'abstraction des requ\xeates ",(0,i.jsx)(n.strong,{children:"NoSQL"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleService"})," : La couche m\xe9tier (ou service/BLL) qui fera appel \xe0 la ",(0,i.jsx)(n.strong,{children:"DAO"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleRestController"})," : Ce contr\xf4leur contiendra les ",(0,i.jsx)(n.strong,{children:"routes API"})," pour le CRUD d'un article (donc 4 routes)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Un article contient au moins:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Id (String)"}),"\n",(0,i.jsx)(n.li,{children:"Title"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Rappel",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"N'oubliez pas de configurer le fichier application.properties/yml pour \xe9tablir correctement la connexion avec votre base de donn\xe9es."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Il faut installer d\xe9pendances mongodb sur build.gradle"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"architecture-visuelle",children:"Architecture visuelle"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Diagram",src:r(2728).c+"",width:"763",height:"481"})}),"\n",(0,i.jsx)(n.h2,{id:"tester",children:"Tester"}),"\n",(0,i.jsx)(n.p,{children:"Pour tester les routes, vous devrez ins\xe9rer 2 \xe0 3 articles en base de donn\xe9es"})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2728:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/tp_2_archi_sql-46e90033e5710314d5c7d26fa66fc15d.png"},2172:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var i=r(1504);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);