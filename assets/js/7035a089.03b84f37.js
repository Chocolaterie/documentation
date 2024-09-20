"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7456],{8080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=i(7624),l=i(2172);const r={sidebar_position:8},t="ListView et RecyclerView",o={id:"android/course/compose/m08-listview",title:"ListView et RecyclerView",description:"Avec Jetpack Compose, il n'est pas n\xe9cessaire d'utiliser un \xe9l\xe9ment sp\xe9cifique comme ListView ou RecyclerView.",source:"@site/docs/android/course/compose/m08-listview.md",sourceDirName:"android/course/compose",slug:"/android/course/compose/m08-listview",permalink:"/documentation/docs/android/course/compose/m08-listview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/course/compose/m08-listview.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Data Binding (MVVM)",permalink:"/documentation/docs/android/course/compose/m08-data-binding"},next:{title:"Room",permalink:"/documentation/docs/android/course/compose/m-demoroom"}},c={},a=[{value:"Cr\xe9er sa cellule/ligne",id:"cr\xe9er-sa-celluleligne",level:2},{value:"Cellule simple",id:"cellule-simple",level:3},{value:"Cellule plus personnalis\xe9e",id:"cellule-plus-personnalis\xe9e",level:3},{value:"Afficher les cellules",id:"afficher-les-cellules",level:2},{value:"Pr\xe9visualiser",id:"pr\xe9visualiser",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"listview-et-recyclerview",children:"ListView et RecyclerView"}),"\n",(0,s.jsxs)(n.p,{children:["Avec Jetpack Compose, il n'est pas n\xe9cessaire d'utiliser un \xe9l\xe9ment sp\xe9cifique comme ",(0,s.jsx)(n.code,{children:"ListView"})," ou ",(0,s.jsx)(n.code,{children:"RecyclerView"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Les composants ",(0,s.jsx)(n.code,{children:"Column"})," et ",(0,s.jsx)(n.code,{children:"LazyColumn"})," vous permettent d\xe9j\xe0 d'afficher des \xe9l\xe9ments de mani\xe8re similaire \xe0 une ",(0,s.jsx)(n.code,{children:"ListView"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Cependant, ",(0,s.jsx)(n.code,{children:"LazyColumn"})," se rapproche davantage de ",(0,s.jsx)(n.code,{children:"RecyclerView"})," car elle n'affiche pas les \xe9l\xe9ments qui sont hors \xe9cran, ce qui am\xe9liore les performances."]}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9er-sa-celluleligne",children:"Cr\xe9er sa cellule/ligne"}),"\n",(0,s.jsx)(n.h3,{id:"cellule-simple",children:"Cellule simple"}),"\n",(0,s.jsxs)(n.p,{children:["Un exemple pour pr\xe9parer une cellule de mani\xe8re tr\xe8s simple (avec juste un ",(0,s.jsx)(n.code,{children:"Text"}),") :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun MyListItem(item: String) {\n    Text(\n        text = item\n    )\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cellule-plus-personnalis\xe9e",children:"Cellule plus personnalis\xe9e"}),"\n",(0,s.jsx)(n.p,{children:"On pourrait aussi ajouter un effet d'ombre avec d'autres attributs comme ceci :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun MyListItem(item: String) {\n    Surface(\n        modifier = Modifier\n            .fillMaxWidth()\n            .padding(8.dp),\n            shadowElevation = 8.dp\n    ) {\n        Text(\n            text = item,\n            style = MaterialTheme.typography.titleSmall,\n            modifier = Modifier.padding(16.dp)\n        )\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"afficher-les-cellules",children:"Afficher les cellules"}),"\n",(0,s.jsxs)(n.p,{children:["On peut cr\xe9er notre composant qui sera simplement un ",(0,s.jsx)(n.code,{children:"LazyColumn"}),", affichant ligne par ligne notre ",(0,s.jsx)(n.code,{children:"MyListItem"})," (la cellule) pour chaque \xe9l\xe9ment dans ma ",(0,s.jsx)(n.code,{children:"List<String> items"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun MyList(items: List<String>) {\n    LazyColumn {\n        items(items) { item ->\n            MyListItem(item)\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pr\xe9visualiser",children:"Pr\xe9visualiser"}),"\n",(0,s.jsx)(n.p,{children:"Comme d'habitude, on peut pr\xe9visualiser notre d\xe9veloppement dans le design si on le souhaite"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@Preview(showBackground = true)\n@Composable\nfun DefaultPreview() {\n    DemoComposeAndroidTheme {\n        MyList(items = listOf("Preview Item 1", "Preview Item 2", "Preview Item 3"))\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>t});var s=i(1504);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);