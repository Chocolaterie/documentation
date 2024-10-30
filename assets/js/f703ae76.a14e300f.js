"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[4944],{4596:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=r(7624),s=r(2172);const t={sidebar_position:2},l="TP Eni Store API (Partie 2)",o={id:"spring-security/tp/tp-2",title:"TP Eni Store API (Partie 2)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/spring-security/tp/tp-2.md",sourceDirName:"spring-security/tp",slug:"/spring-security/tp/tp-2",permalink:"/documentation/docs/spring-security/tp/tp-2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring-security/tp/tp-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TP Eni Store API (Partie 1)",permalink:"/documentation/docs/spring-security/tp/tp-1"},next:{title:"TP Eni Store API (Partie 3)",permalink:"/documentation/docs/spring-security/tp/tp-3"}},c={},d=[{value:"Enonce",id:"enonce",level:2},{value:"Architecture visuelle",id:"architecture-visuelle",level:2},{value:"Delete",id:"delete",level:2},{value:"Tester",id:"tester",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tp-eni-store-api-partie-2",children:"TP Eni Store API (Partie 2)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 1H-2H"})}),"\n",(0,i.jsx)(n.h2,{id:"enonce",children:"Enonce"}),"\n",(0,i.jsx)(n.p,{children:"Nous allons r\xe9aliser un CRUD sur le mod\xe8le Article (\xe0 l'exception du POST)."}),"\n",(0,i.jsx)(n.p,{children:"Il sera n\xe9cessaire de cr\xe9er les \xe9l\xe9ments suivants :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Article"})," : La classe ",(0,i.jsx)(n.strong,{children:"Article"})," dans le package ",(0,i.jsx)(n.strong,{children:"BO"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleDAO"})," : L'interface DAO Article pour le CRUD (findAll, findByUid, delete)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleDAOSQL"})," : L'impl\xe9mentation de l'interface ",(0,i.jsx)(n.strong,{children:"ArticleDAO"})," qui utilisera les donn\xe9es SQL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleSQLRepository"})," : Le repository JPA pour l'abstraction des requ\xeates SQL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleService"})," : La couche m\xe9tier (ou service/BLL) qui fera appel \xe0 la ",(0,i.jsx)(n.strong,{children:"DAO"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ArticleRestController"})," : Ce contr\xf4leur contiendra les ",(0,i.jsx)(n.strong,{children:"routes API"})," pour le CRUD d'un article (donc 3 routes)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Un article contient au moins:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Id"}),"\n",(0,i.jsx)(n.li,{children:"Title"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Rappel",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On ne r\xe9alise pas le POST car cela n\xe9cessiterait des configurations de s\xe9curit\xe9 pour autoriser l'envoi de donn\xe9es dans le corps de la requ\xeate (CSRF, CORS, etc.)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"N'oubliez pas de configurer le fichier application.properties/yml pour \xe9tablir correctement la connexion avec votre base de donn\xe9es."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Il faut le bon driver sql dans gradle"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"architecture-visuelle",children:"Architecture visuelle"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Diagram",src:r(2728).c+"",width:"763",height:"481"})}),"\n",(0,i.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,i.jsxs)(n.p,{children:["Pour la route delete, pour l'instant, nous allons retourner un bool\xe9en (",(0,i.jsx)(n.strong,{children:"true"})," lorsque la suppression fonctionne)"]}),"\n",(0,i.jsx)(n.h2,{id:"tester",children:"Tester"}),"\n",(0,i.jsx)(n.p,{children:"Pour tester les routes, vous devrez ins\xe9rer 2 \xe0 3 articles en base de donn\xe9es"})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2728:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/tp_2_archi_sql-46e90033e5710314d5c7d26fa66fc15d.png"},2172:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>l});var i=r(1504);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);