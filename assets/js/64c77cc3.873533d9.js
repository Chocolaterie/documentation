"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[253],{7415:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(5893),r=t(1151);const i={sidebar_position:5},a="Les h\xe9ritages",o={id:"javaee/jpa/heritage",title:"Les h\xe9ritages",description:"L'objectif est de r\xe9pondre \xe0 cette question :",source:"@site/docs/javaee/jpa/heritage.mdx",sourceDirName:"javaee/jpa",slug:"/javaee/jpa/heritage",permalink:"/documentation/docs/javaee/jpa/heritage",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javaee/jpa/heritage.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Les associations",permalink:"/documentation/docs/javaee/jpa/association"},next:{title:"Session",permalink:"/documentation/docs/category/session"}},c={},l=[];function d(e){const s={blockquote:"blockquote",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"les-h\xe9ritages",children:"Les h\xe9ritages"}),"\n",(0,n.jsx)(s.p,{children:"L'objectif est de r\xe9pondre \xe0 cette question :"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Comment l'h\xe9ritage objet est traduit dans la base de donn\xe9es (sp\xe9cialement avec JPA)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Il existe plusieurs r\xe9ponses."}),"\n",(0,n.jsxs)(s.p,{children:["G\xe9n\xe9ralement nous avons ",(0,n.jsx)(s.strong,{children:"3 mani\xe8res"})," de transcrire un mod\xe8le de donn\xe9es objet physiquement :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SINGLE_TABLE"})," : Tout les objets ayant le m\xeame h\xe9ritage seront stock\xe9s dans ",(0,n.jsx)(s.strong,{children:"la m\xeame table"}),". Un discriminant sera utilis\xe9 pour identifier le ",(0,n.jsx)(s.strong,{children:"type"})," de l'",(0,n.jsx)(s.strong,{children:"objet"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"JOINED"})," : Chaque objet est traduite par une table et l'h\xe9ritage se fait via les jointures"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"TABLE_PER_CLASS"})," : Chaque objet est traduit par une table ",(0,n.jsx)(s.strong,{children:"mais sans jointure"}),", par cons\xe9quence on duplique les valeurs en communes dans chaque table"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Un exemple de repr\xe9sentation de ces 3 strat\xe9gies via un sch\xe9ma, dans le cas ou on aurait ",(0,n.jsx)(s.strong,{children:"Personne"})," et ",(0,n.jsx)(s.strong,{children:"Employe"})," qui h\xe9rite de ",(0,n.jsx)(s.strong,{children:"Personne"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Persistence file location",src:t(5407).Z+"",width:"802",height:"692"})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5407:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/heritage-cbceab7746824e60c87c7bdf6db6bade.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>a});var n=t(7294);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);