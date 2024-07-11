"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[1068],{9124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(7624),r=t(2172),a=t(1268),l=t(3008);const s={sidebar_position:8},o="ListView et RecyclerView",c={id:"android/course/xml/m08-listview",title:"ListView et RecyclerView",description:"Bien qu'il existe beaucoup de composants graphique interessant sur Android, nous allons n\xe9anmoins illustr\xe9 les ListView et RecyclerView car ce sont ceux les plus utiliser dans une application professionnelle.",source:"@site/docs/android/course/xml/m08-listview.mdx",sourceDirName:"android/course/xml",slug:"/android/course/xml/m08-listview",permalink:"/documentation/docs/android/course/xml/m08-listview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/course/xml/m08-listview.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Data Binding (MVVM)",permalink:"/documentation/docs/android/course/xml/m08-data-binding"},next:{title:"WebService API (Json)",permalink:"/documentation/docs/android/course/xml/m09-api"}},u={},d=[{value:"ListView",id:"listview",level:2},{value:"Customiser la ligne",id:"customiser-la-ligne",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"listview-et-recyclerview",children:"ListView et RecyclerView"}),"\n",(0,i.jsx)(n.p,{children:"Bien qu'il existe beaucoup de composants graphique interessant sur Android, nous allons n\xe9anmoins illustr\xe9 les ListView et RecyclerView car ce sont ceux les plus utiliser dans une application professionnelle."}),"\n",(0,i.jsx)(n.p,{children:"Ces deux composants servent a afficher des liste d'element."}),"\n",(0,i.jsx)(n.p,{children:"La ListView est plus simple d'utilisation q'un RecyclerView mais moins performant."}),"\n",(0,i.jsx)(n.h2,{id:"listview",children:"ListView"}),"\n",(0,i.jsx)(n.p,{children:"Pour commencer, un exemple d'utilisation avec une liste de cha\xeenes de caract\xe8res est le plus simple."}),"\n",(0,i.jsx)(n.p,{children:"Une liste comporte ces \xe9tapes :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ajouter un composant ",(0,i.jsx)(n.code,{children:"<ListView>"})," avec un identifiant dans le fichier XML"]}),"\n",(0,i.jsx)(n.li,{children:"R\xe9cup\xe9rer ce composant dans le fichier Kotlin en utilisant son identifiant"}),"\n",(0,i.jsxs)(n.li,{children:["D\xe9finir un ",(0,i.jsx)(n.code,{children:"ArrayAdapter"}),", qui permet de d\xe9terminer comment afficher chaque \xe9l\xe9ment de la liste"]}),"\n",(0,i.jsxs)(n.li,{children:["Alimenter cette liste \xe0 l'aide de l'",(0,i.jsx)(n.code,{children:"ArrayAdapter"})]}),"\n"]}),"\n",(0,i.jsxs)(a.c,{defaultValue:"xml",values:[{label:"XML",value:"xml"},{label:"Kotlin",value:"kotlin"}],children:[(0,i.jsx)(l.c,{value:"xml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n\n    \x3c!-- ListView pour afficher la liste de strings --\x3e\n    <ListView\n        android:id="@+id/listView"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"/>\n\n</LinearLayout>\n'})})}),(0,i.jsx)(l.c,{value:"kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'// Liste fictive\nval stringList = listOf(\n    "Film 1",\n    "Film 2",\n    "Film 3"\n)\n\n// Adapter pour la ListView\n// Adapater d\xe9ja d\xe9velopp\xe9 sur Android pour afficher une cellule avec un String\nval adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, stringList)\n\n// ListView dans le layout\nval listView = findViewById<ListView>(R.id.listView)\nlistView.adapter = adapter\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"customiser-la-ligne",children:"Customiser la ligne"}),"\n",(0,i.jsxs)(n.p,{children:["Pour personnaliser l'affichage de chaque ligne, il faut cr\xe9er son propre ",(0,i.jsx)(n.code,{children:"ArrayAdapter"})," personnalis\xe9 qui va permettre de surcharger :"]}),"\n",(0,i.jsxs)(a.c,{defaultValue:"xml",values:[{label:"XML",value:"xml"},{label:"Kotlin",value:"kotlin"}],children:[(0,i.jsx)(l.c,{value:"xml",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<LinearLayout\n  xmlns:android="http://schemas.android.com/apk/res/android"\n    android:orientatiin="vertical"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    >\n  \x3c!-- Un textview dans la cellule --\x3e\n  <TextView\n      android:id="@+id/movie_title"\n      android:layout_width="match_parent"\n      android:layout_height="wrap_content"\n      android:textSize="18sp"\n      android:textStyle="bold"\n      android:padding="10dp"/>\n\n<LinearLayout>\n'})})}),(0,i.jsx)(l.c,{value:"kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class MovieAdapter(context: Context, movies: List<Movie>) :\n    ArrayAdapter<Movie>(context, 0, movies) {\n\n    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {\n        var itemView = convertView\n        if (itemView == null) {\n            itemView = LayoutInflater.from(context).inflate(R.layout.list_item_movie, parent, false)\n        }\n\n        val movie = getItem(position)\n        val titleTextView = itemView!!.findViewById<TextView>(R.id.movie_title)\n        titleTextView.text = movie?.title\n\n        return itemView\n    }\n}\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Dans l'Activity l'adapter deviens ceci :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"// Adapter personnalis\xe9\nval adapter = MovieAdapter(this, movies)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},3008:(e,n,t)=>{t.d(n,{c:()=>l});t(1504);var i=t(4064);const r={tabItem:"tabItem_Ymn6"};var a=t(7624);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,l),hidden:t,children:n})}},1268:(e,n,t)=>{t.d(n,{c:()=>y});var i=t(1504),r=t(4064),a=t(3943),l=t(5592),s=t(5288),o=t(632),c=t(7128),u=t(3216);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.Uz)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._M)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,d]=h({queryString:t,groupId:r}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.IN)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=c??v;return m({value:e,tabValues:a})?e:null})();(0,s.c)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(3664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(7624);function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.MV)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==i&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.c)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function V(e){const n=v(e);return(0,w.jsxs)("div",{className:(0,r.c)("tabs-container",x.tabList),children:[(0,w.jsx)(b,{...n,...e}),(0,w.jsx)(g,{...n,...e})]})}function y(e){const n=(0,f.c)();return(0,w.jsx)(V,{...e,children:d(e.children)},String(n))}},2172:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>l});var i=t(1504);const r={},a=i.createContext(r);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);