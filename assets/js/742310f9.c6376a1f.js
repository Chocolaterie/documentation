"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[8904],{3076:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=s(7624),t=s(2172);const n={sidebar_position:5},l="TP Article API (Partie 4)",c={id:"nodejs/tp/tp-article-api-4",title:"TP Article API (Partie 4)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les vid\xe9os des modules 1 \xe0 6 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/nodejs/tp/tp-article-api-4.md",sourceDirName:"nodejs/tp",slug:"/nodejs/tp/tp-article-api-4",permalink:"/documentation/docs/nodejs/tp/tp-article-api-4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodejs/tp/tp-article-api-4.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TP Article API (Partie 3)",permalink:"/documentation/docs/nodejs/tp/tp-article-api-3"},next:{title:"TP Article API (EXTRA Angular)",permalink:"/documentation/docs/nodejs/tp/tp-article-api-angular"}},a={},d=[{value:"Enonce",id:"enonce",level:2},{value:"R\xe8gle de gestion",id:"r\xe8gle-de-gestion",level:2},{value:"RG-001 : R\xe9cup\xe9rer les articles",id:"rg-001--r\xe9cup\xe9rer-les-articles",level:3},{value:"Si les articles ont \xe9t\xe9 r\xe9cup\xe9r\xe9s",id:"si-les-articles-ont-\xe9t\xe9-r\xe9cup\xe9r\xe9s",level:4},{value:"RG-002 : R\xe9cup\xe9rer un article",id:"rg-002--r\xe9cup\xe9rer-un-article",level:3},{value:"Si l&#39;uid existe et l&#39;article r\xe9cup\xe9r\xe9 avec succ\xe8s",id:"si-luid-existe-et-larticle-r\xe9cup\xe9r\xe9-avec-succ\xe8s",level:4},{value:"Si l&#39;uid n&#39;existe pas en base",id:"si-luid-nexiste-pas-en-base",level:4},{value:"RG-003 : Ajouter un article",id:"rg-003--ajouter-un-article",level:3},{value:"Si ajout\xe9 avec succ\xe8s",id:"si-ajout\xe9-avec-succ\xe8s",level:4},{value:"Si le titre existe d\xe9j\xe0 en base",id:"si-le-titre-existe-d\xe9j\xe0-en-base",level:4},{value:"Si contr\xf4le de surface invalide",id:"si-contr\xf4le-de-surface-invalide",level:4},{value:"RG-004 : Modifier un article",id:"rg-004--modifier-un-article",level:3},{value:"Si modifi\xe9 avec succ\xe8s",id:"si-modifi\xe9-avec-succ\xe8s",level:4},{value:"Si le titre existe d\xe9j\xe0 en base",id:"si-le-titre-existe-d\xe9j\xe0-en-base-1",level:4},{value:"Si contr\xf4le de surface invalide",id:"si-contr\xf4le-de-surface-invalide-1",level:4},{value:"RG-005 : Supprimer un article",id:"rg-005--supprimer-un-article",level:3},{value:"Si supprim\xe9 avec succ\xe8s",id:"si-supprim\xe9-avec-succ\xe8s",level:4},{value:"Si l&#39;uid n&#39;existe pas en base",id:"si-luid-nexiste-pas-en-base-1",level:4}];function u(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"tp-article-api-partie-4",children:"TP Article API (Partie 4)"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les vid\xe9os des modules 1 \xe0 6 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Dur\xe9e Estim\xe9e : 1H"})}),"\n",(0,r.jsx)(i.h2,{id:"enonce",children:"Enonce"}),"\n",(0,r.jsx)(i.p,{children:"En partant du TP pr\xe9c\xe9dent, l'objectif est d'utilise des r\xe9ponses m\xe9tier (donc un JSON qui contient un code, un message, et la donn\xe9e)"}),"\n",(0,r.jsxs)(i.p,{children:["Exemple de r\xe9ponse attendu pour ",(0,r.jsx)(i.strong,{children:"/articles"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-js",children:'{\n    code : "200",\n    message: "La liste des articles a \xe9t\xe9 r\xe9cup\xe9r\xe9s avec succ\xe8s",\n    data : la liste des articles\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:"Appliquer cette m\xe9thodologie dans toutes vos routes !"}),"\n",(0,r.jsx)(i.h2,{id:"r\xe8gle-de-gestion",children:"R\xe8gle de gestion"}),"\n",(0,r.jsx)(i.h3,{id:"rg-001--r\xe9cup\xe9rer-les-articles",children:"RG-001 : R\xe9cup\xe9rer les articles"}),"\n",(0,r.jsx)(i.h4,{id:"si-les-articles-ont-\xe9t\xe9-r\xe9cup\xe9r\xe9s",children:"Si les articles ont \xe9t\xe9 r\xe9cup\xe9r\xe9s"}),"\n",(0,r.jsx)(i.p,{children:"200 | La liste des articles a \xe9t\xe9 r\xe9cup\xe9r\xe9s avec succ\xe8s | Les articles en JSON"}),"\n",(0,r.jsx)(i.h3,{id:"rg-002--r\xe9cup\xe9rer-un-article",children:"RG-002 : R\xe9cup\xe9rer un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-luid-existe-et-larticle-r\xe9cup\xe9r\xe9-avec-succ\xe8s",children:"Si l'uid existe et l'article r\xe9cup\xe9r\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article r\xe9cup\xe9r\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-luid-nexiste-pas-en-base",children:"Si l'uid n'existe pas en base"}),"\n",(0,r.jsx)(i.p,{children:"702 | Impossible de r\xe9cup\xe9rer un article avec l'UID $uid | Null"}),"\n",(0,r.jsx)(i.h3,{id:"rg-003--ajouter-un-article",children:"RG-003 : Ajouter un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-ajout\xe9-avec-succ\xe8s",children:"Si ajout\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article ajout\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-le-titre-existe-d\xe9j\xe0-en-base",children:"Si le titre existe d\xe9j\xe0 en base"}),"\n",(0,r.jsx)(i.p,{children:"701 | Impossible d'ajouter un article avec un titre d\xe9j\xe0 existant | Null"}),"\n",(0,r.jsx)(i.h4,{id:"si-contr\xf4le-de-surface-invalide",children:"Si contr\xf4le de surface invalide"}),"\n",(0,r.jsx)(i.p,{children:"710 | Contr\xf4le de surface non valide | La liste des erreurs en JSON"}),"\n",(0,r.jsx)(i.h3,{id:"rg-004--modifier-un-article",children:"RG-004 : Modifier un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-modifi\xe9-avec-succ\xe8s",children:"Si modifi\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article modifi\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-le-titre-existe-d\xe9j\xe0-en-base-1",children:"Si le titre existe d\xe9j\xe0 en base"}),"\n",(0,r.jsx)(i.p,{children:"701 | Impossible de modifier un article avec un titre d\xe9j\xe0 existant | Null"}),"\n",(0,r.jsx)(i.h4,{id:"si-contr\xf4le-de-surface-invalide-1",children:"Si contr\xf4le de surface invalide"}),"\n",(0,r.jsx)(i.p,{children:"710 | Contr\xf4le de surface non valide | La liste des erreurs en JSON"}),"\n",(0,r.jsx)(i.h3,{id:"rg-005--supprimer-un-article",children:"RG-005 : Supprimer un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-supprim\xe9-avec-succ\xe8s",children:"Si supprim\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | L'article $uid a \xe9t\xe9 supprim\xe9 avec succ\xe8s | L'article supprim\xe9 JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-luid-nexiste-pas-en-base-1",children:"Si l'uid n'existe pas en base"}),"\n",(0,r.jsx)(i.p,{children:"702 | Impossible de supprimer un article dont l'UID n'existe pas | Null"})]})}function o(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2172:(e,i,s)=>{s.d(i,{I:()=>c,M:()=>l});var r=s(1504);const t={},n=r.createContext(t);function l(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);