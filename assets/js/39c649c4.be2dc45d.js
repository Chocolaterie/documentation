"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[1388],{2084:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(7624),r=i(2172);const o={sidebar_position:3},t="TP Android - Partie 03",l={id:"android/tp/xml/tp-3",title:"TP Android - Partie 03",description:"Dur\xe9e Estim\xe9e : 30min",source:"@site/docs/android/tp/xml/tp-3.md",sourceDirName:"android/tp/xml",slug:"/android/tp/xml/tp-3",permalink:"/documentation/docs/android/tp/xml/tp-3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/tp/xml/tp-3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TP Android - Partie 02",permalink:"/documentation/docs/android/tp/xml/tp-2"},next:{title:"TP Android - Partie 04",permalink:"/documentation/docs/android/tp/xml/tp-4"}},d={},a=[{value:"Enonc\xe9",id:"enonc\xe9",level:2},{value:"Page login",id:"page-login",level:2},{value:"Page inscription",id:"page-inscription",level:2},{value:"Page r\xe9cup\xe9ration mot de passe",id:"page-r\xe9cup\xe9ration-mot-de-passe",level:2},{value:"Migration en DataBinding (Extra)",id:"migration-en-databinding-extra",level:2},{value:"Mise en place",id:"mise-en-place",level:3},{value:"ViewModels",id:"viewmodels",level:3},{value:"Model",id:"model",level:3},{value:"Inscription",id:"inscription",level:3}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tp-android---partie-03",children:"TP Android - Partie 03"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 30min"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"enonc\xe9",children:"Enonc\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["Dans les 3 pages, afficher une bo\xeete de dialogue lorsque vous ",(0,s.jsx)(n.strong,{children:"soumettez"})," formulaire."]}),"\n",(0,s.jsx)(n.h2,{id:"page-login",children:"Page login"}),"\n",(0,s.jsxs)(n.p,{children:["Lors de la soumission du formulaire, afficher dans une ",(0,s.jsx)(n.strong,{children:"dialog"}),' : "Vous \xeates connect\xe9(e) avec succ\xe8s"']}),"\n",(0,s.jsx)(n.h2,{id:"page-inscription",children:"Page inscription"}),"\n",(0,s.jsxs)(n.p,{children:["Lors de la soumission du formulaire, afficher dans une ",(0,s.jsx)(n.strong,{children:"dialog"})," un r\xe9sum\xe9 des informations saisies"]}),"\n",(0,s.jsx)(n.h2,{id:"page-r\xe9cup\xe9ration-mot-de-passe",children:"Page r\xe9cup\xe9ration mot de passe"}),"\n",(0,s.jsxs)(n.p,{children:["Lors de la soumission du formulaire, afficher dans une ",(0,s.jsx)(n.strong,{children:"dialog"}),' : "Un mail de r\xe9cup\xe9ration a \xe9t\xe9 envoy\xe9 \xe0 email_saisi"']}),"\n",(0,s.jsx)(n.h2,{id:"migration-en-databinding-extra",children:"Migration en DataBinding (Extra)"}),"\n",(0,s.jsx)(n.h3,{id:"mise-en-place",children:"Mise en place"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Activer le DataBinding dans le projet"}),"\n",(0,s.jsx)(n.li,{children:"Convertir les 3 pages en DataBinding"}),"\n",(0,s.jsxs)(n.li,{children:["Les boutons ne sont plus accessibles via ",(0,s.jsx)(n.strong,{children:"findViewById"})," mais directement via la vue DataBinding charg\xe9e"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"viewmodels",children:"ViewModels"}),"\n",(0,s.jsx)(n.p,{children:"Cr\xe9er les classes ViewModel pour les \xe9crans correspondants :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"LoginViewModel"}),"\n",(0,s.jsx)(n.li,{children:"RegisterViewModel"}),"\n",(0,s.jsx)(n.li,{children:"ResetPasswordViewModel"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ces 3 classes doivent \xeatre associ\xe9es dans chacunes des vues respectives (data et variable)"}),"\n",(0,s.jsx)(n.admonition,{title:"Attention !!!",type:"warning",children:(0,s.jsx)(n.p,{children:"N'oubliez pas d'instancier ces ViewModel dans les Activity (car elles sont Null par d\xe9faut)"})}),"\n",(0,s.jsx)(n.h3,{id:"model",children:"Model"}),"\n",(0,s.jsxs)(n.p,{children:["Cr\xe9er une classe ",(0,s.jsx)(n.strong,{children:"Person"})," ou ",(0,s.jsx)(n.strong,{children:"User"})," qui va contenir les attributs n\xe9cessaires :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"email"}),"\n",(0,s.jsx)(n.li,{children:"pseudo"}),"\n",(0,s.jsx)(n.li,{children:"password"}),"\n",(0,s.jsx)(n.li,{children:"zipCode"}),"\n",(0,s.jsx)(n.li,{children:"city"}),"\n",(0,s.jsx)(n.li,{children:"phone"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"inscription",children:"Inscription"}),"\n",(0,s.jsxs)(n.p,{children:["La confirmation mot de passe ne fait pas partie du model ",(0,s.jsx)(n.strong,{children:"Person"}),", donc pour l'associer dans le EditText il va falloir\nle mettre dans le ViewModel ",(0,s.jsx)(n.strong,{children:"RegisterViewModel"}),"\nDonc dans ",(0,s.jsx)(n.strong,{children:"RegisterViewModel"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"person: Person"}),"\n",(0,s.jsx)(n.li,{children:"passwordConfirm : String"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var s=i(1504);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);