"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[1672],{1960:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=o(7624),i=o(2172);const t={sidebar_position:10},a="Associer des champs",r={id:"android/course/compose/m08-data-binding-class",title:"Associer des champs",description:"ViewModel",source:"@site/docs/android/course/compose/m08-data-binding-class.md",sourceDirName:"android/course/compose",slug:"/android/course/compose/m08-data-binding-class",permalink:"/documentation/docs/android/course/compose/m08-data-binding-class",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/course/compose/m08-data-binding-class.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Room",permalink:"/documentation/docs/android/course/compose/m-demoroom"},next:{title:"Composants utilitaires",permalink:"/documentation/docs/android/course/compose/view-utility"}},l={},c=[{value:"ViewModel",id:"viewmodel",level:2},{value:"Une classe model",id:"une-classe-model",level:4},{value:"Un View Model",id:"un-view-model",level:4},{value:"Dans le formulaire",id:"dans-le-formulaire",level:4}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"associer-des-champs",children:"Associer des champs"}),"\n",(0,s.jsx)(n.h2,{id:"viewmodel",children:"ViewModel"}),"\n",(0,s.jsx)(n.p,{children:"Pour lier une classe avec des propri\xe9t\xe9s dans un formulaire, vous devez trouver un moyen d'associer les valeurs saisies dans chaque champ tout en observant les valeurs."}),"\n",(0,s.jsx)(n.p,{children:"Plusieurs solutions s'offrent \xe0 vous, cependant voici une proposition"}),"\n",(0,s.jsx)(n.h4,{id:"une-classe-model",children:"Une classe model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'data class Article(var title: String = "", var content : String = "") {\n\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Attention au data class",type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"data class"})," permet d'avoir des extensions de fonction utiles pour compose"]})}),"\n",(0,s.jsx)(n.h4,{id:"un-view-model",children:"Un View Model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"class MonViewModel : ViewModel() {\n\n    var article = MutableStateFlow(Article())\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"dans-le-formulaire",children:"Dans le formulaire"}),"\n",(0,s.jsx)(n.p,{children:"Cette proposition qui va suivre est la version native sans fonctions utilitaires :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"...\n\n// Champ titre\nTextField(value = article.title, onValueChange = { monViewModel.article.value = articleViewModel.article.value.copy(title = it) } )\n\n// Champ content\nTextField(value = article.content, onValueChange = { monViewModel.article.value = articleViewModel.article.value.copy(content = it) } )\n\n...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>a});var s=o(1504);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);