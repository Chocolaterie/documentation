"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7112],{8796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(7624),r=n(2172);const i={sidebar_position:6},o="TP Eni Store API (Partie 6)",c={id:"spring-security/tp/tp-6",title:"TP Eni Store API (Partie 6)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 6 d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/spring-security/tp/tp-6.md",sourceDirName:"spring-security/tp",slug:"/spring-security/tp/tp-6",permalink:"/documentation/docs/spring-security/tp/tp-6",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring-security/tp/tp-6.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TP Eni Store API (Partie 5)",permalink:"/documentation/docs/spring-security/tp/tp-5"},next:{title:"TP Eni Store API (Partie 7)",permalink:"/documentation/docs/spring-security/tp/tp-7"}},a={},l=[{value:"Enonce",id:"enonce",level:2}];function d(e){const t={admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tp-eni-store-api-partie-6",children:"TP Eni Store API (Partie 6)"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 6 d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Dur\xe9e Estim\xe9e : 1h"})}),"\n",(0,s.jsx)(t.h2,{id:"enonce",children:"Enonce"}),"\n",(0,s.jsxs)(t.p,{children:["Avant d'utiliser les jetons JWT, nous allons terminer de tester ",(0,s.jsx)(t.strong,{children:"BasicAuth"})," avec nos utilisateurs en base de donn\xe9es !"]}),"\n",(0,s.jsxs)(t.p,{children:["Nous allons \xe9galement en profiter pour restreindre l'acc\xe8s \xe0 la route ",(0,s.jsx)(t.strong,{children:"DELETE"})," /api/v1/articles/id uniquement aux administrateurs (",(0,s.jsx)(t.strong,{children:"ROLE_ADMIN"}),")."]}),"\n",(0,s.jsx)(t.p,{children:"Pour ce faire, vous devrez :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Cr\xe9er la classe BO ",(0,s.jsx)(t.strong,{children:"User"})," qui impl\xe9mente ",(0,s.jsx)(t.strong,{children:"UserDetails"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Avoir le Repository pour l'entit\xe9 ",(0,s.jsx)(t.strong,{children:"User"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Ajouter la restriction \xe0 la route DELETE /api/v1/articles/id pour le r\xf4le ",(0,s.jsx)(t.strong,{children:"ADMIN"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Surcharger la m\xe9thode de r\xe9cup\xe9ration d'un utilisateur via ",(0,s.jsx)(t.strong,{children:"BasicAuth"}),", comme cela a \xe9t\xe9 fait dans la d\xe9monstration (configAuthBuilder, MongoAuthUserDetailService, etc)"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Les Mot de passe crypt\xe9s !",type:"warning",children:(0,s.jsxs)(t.p,{children:["Nous utilisons l'algorithme ",(0,s.jsx)(t.strong,{children:"BCrypt"})," pour v\xe9rifier les mots de passe en basic authentification. Cela signifie que dans votre base de donn\xe9es MongoDB, vous devrez ins\xe9rer des mots de passe crypt\xe9s en ",(0,s.jsx)(t.strong,{children:"BCrypt"}),", sinon l'utilisateur ne pourra jamais \xeatre connect\xe9 !"]})})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var s=n(1504);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);