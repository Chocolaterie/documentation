"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[1956],{5400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(7624),i=t(2172);const r={sidebar_position:6},c="TP Twitter - Partie 05",o={id:"flutter/tp_twitter/tp-5",title:"TP Twitter - Partie 05",description:"Dur\xe9e Estim\xe9e : 1h",source:"@site/docs/flutter/tp_twitter/tp-5.md",sourceDirName:"flutter/tp_twitter",slug:"/flutter/tp_twitter/tp-5",permalink:"/documentation/docs/flutter/tp_twitter/tp-5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/tp_twitter/tp-5.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TP Twitter - Partie 04 (MVVM)",permalink:"/documentation/docs/flutter/tp_twitter/tp-4-bonus"},next:{title:"TP Twitter - Partie 06",permalink:"/documentation/docs/flutter/tp_twitter/tp-6"}},l={},a=[{value:"Enonc\xe9",id:"enonc\xe9",level:2},{value:"Lancer le Back-End Express",id:"lancer-le-back-end-express",level:2},{value:"Postman",id:"postman",level:2},{value:"Login",id:"login",level:2},{value:"Coupe email mot de passe incorrect",id:"coupe-email-mot-de-passe-incorrect",level:3},{value:"Connexion correcte",id:"connexion-correcte",level:3},{value:"Les commentaires/tweets",id:"les-commentairestweets",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tp-twitter---partie-05",children:"TP Twitter - Partie 05"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 1h"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"enonc\xe9",children:"Enonc\xe9"}),"\n",(0,s.jsx)(n.p,{children:"Il convient d'avoir suivi la d\xe9mo sur les APIs et l'exploitation de notre propre API Node.js avec des tokens pour le TP."}),"\n",(0,s.jsx)(n.p,{children:"Dor\xe9navant, nous allons utiliser notre propre API backend en local pour r\xe9cup\xe9rer les tweets et compl\xe9ter les quatre \xe9crans, y compris la page de connexion."}),"\n",(0,s.jsx)(n.p,{children:"Dans l'API backend fournie, la connexion g\xe9n\xe8re un token JWT d'une dur\xe9e d'une heure et les points d'entr\xe9e comme la r\xe9cup\xe9ration des tweets n\xe9cessiteront ce token, donc certaines routes seront prot\xe9g\xe9es par authentification."}),"\n",(0,s.jsx)(n.p,{children:"Par exemple, si j'acc\xe8de \xe0 la page des tweets sans \xeatre connect\xe9 et que j'appelle le service :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(4484).c+"",width:"501",height:"927"})}),"\n",(0,s.jsx)(n.h2,{id:"lancer-le-back-end-express",children:"Lancer le Back-End Express"}),"\n",(0,s.jsxs)(n.p,{children:["Veuille r\xe9cup\xe9rer le ",(0,s.jsx)(n.code,{children:"tp_twitter_back_api"}),"\nDans le dossier en ligne de commande :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm install"}),"  ou  ",(0,s.jsx)(n.code,{children:"npm ci"})," (pour installer les d\xe9pendances, uniquement la premi\xe8re fois)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node app.js"})," (pour lancer l'app)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"postman",children:"Postman"}),"\n",(0,s.jsx)(n.p,{children:"Si vous voulez comprendre comment fonctionne une API qui vous est fournie, il convient de tester les points d'entr\xe9e sur Postman ou via Swagger s'il existe."}),"\n",(0,s.jsx)(n.p,{children:"Exemple de requ\xeate de connexion \xe0 l'API avec Postman :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(212).c+"",width:"860",height:"675"})}),"\n",(0,s.jsx)(n.p,{children:"Exemple de requ\xeate de connexion \xe0 l'API avec Swagger :"}),"\n",(0,s.jsx)(n.p,{children:"Connexion jwt avec swagger"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(4348).c+"",width:"1576",height:"644"})}),"\n",(0,s.jsx)(n.p,{children:"Appel d'une route"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(924).c+"",width:"1612",height:"991"})}),"\n",(0,s.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,s.jsx)(n.p,{children:"Les comptes mock :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"mailto:isaac@gmail.com",children:"isaac@gmail.com"})," | 123456"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"mailto:denis@gmail.com",children:"denis@gmail.com"})," | 123456"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"mailto:chocolatine@gmail.com",children:"chocolatine@gmail.com"})," | password"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pour la connexion l'api:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["POST: ",(0,s.jsx)(n.code,{children:"http://127.0.01:3000/auth"})]}),"\n",(0,s.jsxs)(n.li,{children:["vous devez envoyer dans le request body :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"email"}),"\n",(0,s.jsx)(n.li,{children:"password"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"coupe-email-mot-de-passe-incorrect",children:"Coupe email mot de passe incorrect"}),"\n",(0,s.jsx)(n.p,{children:"Si les informations ne sont pas correctes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(5244).c+"",width:"500",height:"926"})}),"\n",(0,s.jsx)(n.h3,{id:"connexion-correcte",children:"Connexion correcte"}),"\n",(0,s.jsx)(n.p,{children:"Si les informations sont correctes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Le token retourn\xe9 par l'API devra \xeatre stock\xe9 dans Flutter par divers moyens (par exemple, dans un singleton, une variable statique ou un cache, \xe0 vous de choisir)."}),"\n",(0,s.jsx)(n.li,{children:'\xc0 chaque fois que vous allez appeler une API s\xe9curis\xe9e, vous enverrez le token dans l\'en-t\xeate "Authorization" de la requ\xeate HTTP depuis Flutter, en utilisant le sch\xe9ma Bearer Token.'}),"\n",(0,s.jsx)(n.li,{children:"Redirigez vers la page des commentaires/tweets"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"les-commentairestweets",children:"Les commentaires/tweets"}),"\n",(0,s.jsx)(n.p,{children:"Si vous \xeates connect\xe9, l'endpoint pour afficher les commentaires sur la page est :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GET: ",(0,s.jsx)(n.code,{children:"http://127.0.01:3000/v2/comment/all"})]}),"\n",(0,s.jsx)(n.li,{children:"Envoyer le token dans le header bearer token"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot",src:t(7812).c+"",width:"499",height:"924"})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4484:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_01_01-b70868d24e7b4bffdea6a35dc72efd2e.png"},212:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_01_02-9f94dcc851397a30939274e1123bdf2a.png"},4348:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_01_03-4fc83058c2b9b3e671da6ea1c9068811.png"},924:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_01_04-1e304029451cc5a262b788bf7c776ef8.png"},7812:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_comments_02-85645207d51a4b5540753ca5d0bfa15f.png"},5244:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/tp_api_node_login_01-1a7a7835a4f1f61830875c9309f958f6.png"},2172:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>c});var s=t(1504);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);