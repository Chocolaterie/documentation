"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[5560],{8060:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=s(7624),t=s(2172);const n={sidebar_position:3},c="TP Eni Store API (Partie 3)",l={id:"spring-security/tp/v2/tp-3",title:"TP Eni Store API (Partie 3)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi tout les modules et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/spring-security/tp/v2/tp-3.md",sourceDirName:"spring-security/tp/v2",slug:"/spring-security/tp/v2/tp-3",permalink:"/documentation/docs/spring-security/tp/v2/tp-3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring-security/tp/v2/tp-3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TP Eni Store API - MongoDB (Partie 2)",permalink:"/documentation/docs/spring-security/tp/v2/tp-2-mongo"},next:{title:"TP Eni Store API - JPA MySQL (Partie 4)",permalink:"/documentation/docs/spring-security/tp/v2/tp-4"}},a={},u=[{value:"Enonce",id:"enonce",level:2},{value:"R\xe8gle de gestion",id:"r\xe8gle-de-gestion",level:2},{value:"RG-001 : R\xe9cup\xe9rer les articles",id:"rg-001--r\xe9cup\xe9rer-les-articles",level:3},{value:"Si les articles ont \xe9t\xe9 r\xe9cup\xe9r\xe9s",id:"si-les-articles-ont-\xe9t\xe9-r\xe9cup\xe9r\xe9s",level:4},{value:"RG-002 : R\xe9cup\xe9rer un article",id:"rg-002--r\xe9cup\xe9rer-un-article",level:3},{value:"Si l&#39;id existe et l&#39;article r\xe9cup\xe9r\xe9 avec succ\xe8s",id:"si-lid-existe-et-larticle-r\xe9cup\xe9r\xe9-avec-succ\xe8s",level:4},{value:"Si l&#39;id n&#39;existe pas en base",id:"si-lid-nexiste-pas-en-base",level:4},{value:"RG-003 : Ajouter un article",id:"rg-003--ajouter-un-article",level:3},{value:"Si ajout\xe9 avec succ\xe8s",id:"si-ajout\xe9-avec-succ\xe8s",level:4},{value:"Si le titre existe d\xe9j\xe0 en base (\xe0 la fin)",id:"si-le-titre-existe-d\xe9j\xe0-en-base-\xe0-la-fin",level:4},{value:"RG-004 : Modifier un article",id:"rg-004--modifier-un-article",level:3},{value:"Si modifi\xe9 avec succ\xe8s",id:"si-modifi\xe9-avec-succ\xe8s",level:4},{value:"Si le titre existe d\xe9j\xe0 en base (\xe0 la fin)",id:"si-le-titre-existe-d\xe9j\xe0-en-base-\xe0-la-fin-1",level:4},{value:"RG-005 : Supprimer un article",id:"rg-005--supprimer-un-article",level:3},{value:"Si supprim\xe9 avec succ\xe8s",id:"si-supprim\xe9-avec-succ\xe8s",level:4},{value:"Si l&#39;id n&#39;existe pas en base",id:"si-lid-nexiste-pas-en-base-1",level:4}];function d(e){const i={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"tp-eni-store-api-partie-3",children:"TP Eni Store API (Partie 3)"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi tout les modules et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Dur\xe9e Estim\xe9e : 1h"})}),"\n",(0,r.jsx)(i.h2,{id:"enonce",children:"Enonce"}),"\n",(0,r.jsx)(i.p,{children:"Dans ce TP, nous allons mettre en place des r\xe9ponses m\xe9tier plut\xf4t que de simplement renvoyer des donn\xe9es sans aucun moyen de conna\xeetre le r\xe9sultat de nos traitements m\xe9tier."}),"\n",(0,r.jsxs)(i.p,{children:["Ajouter le ",(0,r.jsx)(i.strong,{children:"ServiceResponse"})," g\xe9n\xe9rique"]}),"\n",(0,r.jsx)(i.h2,{id:"r\xe8gle-de-gestion",children:"R\xe8gle de gestion"}),"\n",(0,r.jsx)(i.h3,{id:"rg-001--r\xe9cup\xe9rer-les-articles",children:"RG-001 : R\xe9cup\xe9rer les articles"}),"\n",(0,r.jsx)(i.h4,{id:"si-les-articles-ont-\xe9t\xe9-r\xe9cup\xe9r\xe9s",children:"Si les articles ont \xe9t\xe9 r\xe9cup\xe9r\xe9s"}),"\n",(0,r.jsx)(i.p,{children:"200 | La liste des articles a \xe9t\xe9 r\xe9cup\xe9r\xe9s avec succ\xe8s | Les articles en JSON"}),"\n",(0,r.jsx)(i.h3,{id:"rg-002--r\xe9cup\xe9rer-un-article",children:"RG-002 : R\xe9cup\xe9rer un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-lid-existe-et-larticle-r\xe9cup\xe9r\xe9-avec-succ\xe8s",children:"Si l'id existe et l'article r\xe9cup\xe9r\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article r\xe9cup\xe9r\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-lid-nexiste-pas-en-base",children:"Si l'id n'existe pas en base"}),"\n",(0,r.jsx)(i.p,{children:"702 | Impossible de r\xe9cup\xe9rer un article avec l'id $id | Null"}),"\n",(0,r.jsx)(i.h3,{id:"rg-003--ajouter-un-article",children:"RG-003 : Ajouter un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-ajout\xe9-avec-succ\xe8s",children:"Si ajout\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article ajout\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-le-titre-existe-d\xe9j\xe0-en-base-\xe0-la-fin",children:"Si le titre existe d\xe9j\xe0 en base (\xe0 la fin)"}),"\n",(0,r.jsx)(i.p,{children:"701 | Impossible d'ajouter un article avec un titre d\xe9j\xe0 existant | Null"}),"\n",(0,r.jsx)(i.h3,{id:"rg-004--modifier-un-article",children:"RG-004 : Modifier un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-modifi\xe9-avec-succ\xe8s",children:"Si modifi\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | Article modifi\xe9 avec succ\xe8s | L'article JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-le-titre-existe-d\xe9j\xe0-en-base-\xe0-la-fin-1",children:"Si le titre existe d\xe9j\xe0 en base (\xe0 la fin)"}),"\n",(0,r.jsx)(i.p,{children:"701 | Impossible de modifier un article avec un titre d\xe9j\xe0 existant | Null"}),"\n",(0,r.jsx)(i.h3,{id:"rg-005--supprimer-un-article",children:"RG-005 : Supprimer un article"}),"\n",(0,r.jsx)(i.h4,{id:"si-supprim\xe9-avec-succ\xe8s",children:"Si supprim\xe9 avec succ\xe8s"}),"\n",(0,r.jsx)(i.p,{children:"200 | L'article $id a \xe9t\xe9 supprim\xe9 avec succ\xe8s | L'article supprim\xe9 JSON"}),"\n",(0,r.jsx)(i.h4,{id:"si-lid-nexiste-pas-en-base-1",children:"Si l'id n'existe pas en base"}),"\n",(0,r.jsx)(i.p,{children:"702 | Impossible de supprimer un article dont l'id n'existe pas | Null"})]})}function o(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2172:(e,i,s)=>{s.d(i,{I:()=>l,M:()=>c});var r=s(1504);const t={},n=r.createContext(t);function c(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);