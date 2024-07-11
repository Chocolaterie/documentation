"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[3768],{8968:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(7624),r=n(2172);const o={sidebar_position:9},t="WebService API (Json)",l={id:"android/course/xml/m09-api",title:"WebService API (Json)",description:"Sur Android, nous pouvons travailler avec des microservices gr\xe2ce aux appels API, comme n'importe quelle application front-end moderne.",source:"@site/docs/android/course/xml/m09-api.md",sourceDirName:"android/course/xml",slug:"/android/course/xml/m09-api",permalink:"/documentation/docs/android/course/xml/m09-api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/course/xml/m09-api.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"ListView et RecyclerView",permalink:"/documentation/docs/android/course/xml/m08-listview"},next:{title:"Version Compose",permalink:"/documentation/docs/category/version-compose"}},a={},c=[{value:"Autorisation",id:"autorisation",level:2},{value:"Moshi et Retrofit",id:"moshi-et-retrofit",level:2},{value:"Installer les d\xe9pendances",id:"installer-les-d\xe9pendances",level:3},{value:"Model",id:"model",level:3},{value:"Utilitaire Retrofit/Moshi",id:"utilitaire-retrofitmoshi",level:3},{value:"Service",id:"service",level:3},{value:"Exploitation du service",id:"exploitation-du-service",level:3}];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"webservice-api-json",children:"WebService API (Json)"}),"\n",(0,s.jsx)(i.p,{children:"Sur Android, nous pouvons travailler avec des microservices gr\xe2ce aux appels API, comme n'importe quelle application front-end moderne."}),"\n",(0,s.jsx)(i.p,{children:"Comme pour beaucoup de technologies, il existe un large \xe9ventail de choix pour atteindre cet objectif. Parmi les solutions les plus anciennes et traditionnelles figurent Retrofit et OkHTTP, utilis\xe9s en combinaison avec Moshi pour la conversion JSON."}),"\n",(0,s.jsx)(i.admonition,{title:"Note",type:"info",children:(0,s.jsx)(i.p,{children:"Pour illustrer ce chapitre, nous allons prendre comme exemple l'affichage d'une liste de films."})}),"\n",(0,s.jsx)(i.h2,{id:"autorisation",children:"Autorisation"}),"\n",(0,s.jsx)(i.p,{children:"Il faut autoriser l'acc\xe8s \xe0 Internet si vous appelez des API sur un r\xe9seau Internet."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Ajoutez les deux permissions ",(0,s.jsx)(i.code,{children:"android.permission.INTERNET"})," et ",(0,s.jsx)(i.code,{children:"android.permission.ACCESS_NETWORK_STATE"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Selon la version de vos d\xe9pendances et du SDK/API Android, il faudra s\xfbrement param\xe9trer ",(0,s.jsx)(i.code,{children:"android:usesCleartextTraffic"})," \xe0 ",(0,s.jsx)(i.code,{children:"true"})," dans la balise ",(0,s.jsx)(i.code,{children:"<application>"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"AndroidManifest.xml :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools">\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    ...\n\n    <application\n        android:usesCleartextTraffic="true"\n        \n    ...\n'})}),"\n",(0,s.jsx)(i.h2,{id:"moshi-et-retrofit",children:"Moshi et Retrofit"}),"\n",(0,s.jsx)(i.h3,{id:"installer-les-d\xe9pendances",children:"Installer les d\xe9pendances"}),"\n",(0,s.jsx)(i.p,{children:"Dans le gradle :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'dependencies {\n    ...\n\n    // Moshi\n    implementation("com.squareup.moshi:moshi:1.14.0")\n    implementation("com.squareup.moshi:moshi-kotlin:1.14.0")\n\n    // Retrofit\n    implementation("com.squareup.retrofit2:retrofit:2.9.0")\n    implementation("com.squareup.retrofit2:converter-moshi:2.9.0")\n\n    // Ok HTTP\n    implementation("com.squareup.okhttp3:okhttp:4.9.0")\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"model",children:"Model"}),"\n",(0,s.jsx)(i.p,{children:"Nous pouvons d\xe9finir une classe qui servira de mod\xe8le/DTO pour convertir/mapper les films de JSON en objets Kotlin."}),"\n",(0,s.jsx)(i.p,{children:"Nous n'avons pas encore effectu\xe9 le mapping JSON/classe, seulement cr\xe9\xe9 la classe."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-kotlin",children:'data class Movie (var id : Int = -1, var title: String = "") {\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"utilitaire-retrofitmoshi",children:"Utilitaire Retrofit/Moshi"}),"\n",(0,s.jsx)(i.p,{children:"Il faut \xe0 pr\xe9sent cr\xe9er l'outil qui nous permettra de faire les appels HTTP avec la conversion automatique JSON/classe."}),"\n",(0,s.jsx)(i.p,{children:"J'ai d\xe9cid\xe9 de l'appeler RetrofitTools, qui poss\xe9dera principalement des fonctions statiques."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-kotlin",children:"class RetrofitTools {\n\n    companion object{\n        // La racine de l'api\n        val BASE_URL = \"https://raw.githubusercontent.com/Chocolaterie/EniWebService/main/api/\"\n\n        // L'utilitaire conversion JSON <=> Objet\n        val moshi = Moshi.Builder().add(KotlinJsonAdapterFactory()).build();\n\n        // Retrofit\n        val retrofit = Retrofit.Builder()\n            .addConverterFactory(MoshiConverterFactory.create(moshi))\n            .baseUrl(BASE_URL).build();\n    }\n\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"service",children:"Service"}),"\n",(0,s.jsx)(i.p,{children:"On peut cr\xe9er un Service dont le but sera d'appeler les URL li\xe9es aux films gr\xe2ce \xe0 notre outil Retrofit. On pourrait l'appeler MovieService"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-kotlin",children:'interface MovieService {\n\n    @GET("movies.json")\n    suspend fun getMovies() : List<Movie>\n\n    object MovieApi {\n        val movieService : MovieService by lazy { retrofit.create(MovieService::class.java) }\n    }\n}\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Ce service utilise notre outil Retrofit en cr\xe9ant un singleton qui utilise implicitement Retrofit, mais pour les URLs sp\xe9cifiques aux films."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"object MovieApi"})," est un singleton, utilisant une syntaxe propre \xe0 Kotlin pour rendre le code moins verbeux."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Dans ce singleton, ",(0,s.jsx)(i.code,{children:"val movieService: MovieService by lazy"})," permet d'instancier notre service de mani\xe8re paresseuse (lazy), ce qui signifie que l'initialisation du ",(0,s.jsx)(i.code,{children:"movieService"})," ne se fait qu'au premier acc\xe8s."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"exploitation-du-service",children:"Exploitation du service"}),"\n",(0,s.jsx)(i.p,{children:"Il existe de multiples fa\xe7ons d'exploiter notre service qui appelle l'API :"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Afficher les films dans une liste"}),"\n",(0,s.jsx)(i.li,{children:"Afficher les films dans les logs"}),"\n",(0,s.jsx)(i.li,{children:"Appeler le service dans un ViewModel pour diverses raisons"}),"\n",(0,s.jsx)(i.li,{children:"Etc."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Pour rester le plus simple possible, voici un exemple d'utilisation de notre service qui appelle l'API dans une Activity :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-kotlin",children:'// Appel de la fonction suspend dans une coroutine (t\xe2che asynchrone)\nlifecycleScope.launch {\n    // Notifier les changements\n    var movies = MovieService.MovieApi.movieService.getMovies();\n\n    // Ffficher les films dans le log\n    for (movie in movies){\n        Log.i("Demo", "La film : ${movie.id} | ${movie.title}");\n    }\n}\n'})}),"\n",(0,s.jsxs)(i.admonition,{title:"Coroutine",type:"info",children:[(0,s.jsxs)(i.p,{children:["Vous remarquerez que j'appelle le service dans un ",(0,s.jsx)(i.code,{children:"lifecycleScope.launch"})]}),(0,s.jsx)(i.p,{children:"C'est une coroutine pour appeler des fonctions asynchrones en toute s\xe9curit\xe9 dans le thread de l'UI"})]})]})}function u(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,i,n)=>{n.d(i,{I:()=>l,M:()=>t});var s=n(1504);const r={},o=s.createContext(r);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);