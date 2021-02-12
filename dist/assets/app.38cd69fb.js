import{p as e,a as t,r as s,o as a,c as o,b as n,d as c,w as l,e as r,F as i,f as p,t as d,u as m,V as u}from"./vendor.221782d8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,n)=>{const c=new URL(e,a);if(self[t].moduleMap[c])return s(self[t].moduleMap[c]);const l=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){n(new Error(`Failed to import: ${e}`)),o(r)},onload(){s(self[t].moduleMap[c]),o(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");let b;const f={},g=function(e,t){if(!t)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in f)return;f[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":b,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise((e=>{a.addEventListener("load",e)})):void 0}))).then((()=>e()))};const _={},h=l("data-v-82c92a34");e("data-v-82c92a34");const v=n("img",{class:"logo-image",src:"/assets/logo.1a8473b1.svg",alt:"home"},null,-1),w={class:"button-stack"},k=r("Projects"),x=r("Blog"),j=r("About Me");t();const E=h(((e,t)=>{const l=s("router-link");return a(),o("nav",null,[n(l,{class:"home-button",to:"/"},{default:h((()=>[v])),_:1}),n("div",w,[n(l,{class:"link-button",to:"/projects"},{default:h((()=>[k])),_:1}),n(l,{class:"link-button",to:"/blog"},{default:h((()=>[x])),_:1}),c(' <router-link class="link-button">News</router-link> '),n(l,{class:"link-button ",to:"/about-me"},{default:h((()=>[j])),_:1})])])}));_.render=E,_.__scopeId="data-v-82c92a34";const L={"/src/pages/blog/index.vue":()=>g((()=>__import__("./index.33780ea9.js")),["/assets/index.33780ea9.js","/assets/vendor.221782d8.js"]),"/src/pages/blog/spanish/bienvenidos.md":()=>g((()=>__import__("./bienvenidos.31cbe38c.js")),["/assets/bienvenidos.31cbe38c.js","/assets/vendor.221782d8.js"]),"/src/pages/blog/spanish/react/como-funciona-react.md":()=>g((()=>__import__("./como-funciona-react.57c7d0cd.js")),["/assets/como-funciona-react.57c7d0cd.js","/assets/vendor.221782d8.js"])},R=Object.entries(L).map((([e,t])=>{console.log({path:e});const s=e.replace(/.*blog\//,"").replace(/.(md|vue)/,"").replace(/^\.\//,""),a=(s.match(/.+?\//g)||[]).map((e=>e.replace(/^\//,"").replace(/\/$/,""))),o="/blog/"+s,[n,...c]=s.replace(/-/g," ").replace(/.+\//,"").split(""),l=[n.toUpperCase(),...c].join("");return"Index"!==l?{name:l,url:o,tags:a}:void 0})).filter((e=>e)),y={setup:()=>({posts:R})},I=l("data-v-2329b982");e("data-v-2329b982");const A={class:"posts-container"},O=n("div",{class:"top"},[n("p",{class:"main-text -title"},"Latest Updates")],-1),P={class:"post-list"},D={class:"post-item"},T={class:"main-text -subtitle"},V={class:"main-text flex justify-between"},z=n("p",{class:""}," Ver mas. ",-1),U={class:"flex justify-items-end ml-10 place-items-center"},M={class:"bg-red-600 text-white text-sm font-medium p-1 rounded-sm mx-1.5"};t();const $=I(((e,t,c,l,r,m)=>{const u=s("router-link");return a(),o("div",A,[O,n("ul",P,[(a(!0),o(i,null,p(l.posts,(e=>(a(),o("li",D,[n(u,{to:e.url},{default:I((()=>[n("article",null,[n("p",T,d(e.name),1),n("div",V,[z,n("div",U,[(a(!0),o(i,null,p(e.tags,(e=>(a(),o("span",M,d(e),1)))),256))])])])])),_:2},1032,["to"])])))),256))])])}));y.render=$,y.__scopeId="data-v-2329b982";const F={},C=l("data-v-dc8c0fae");e("data-v-dc8c0fae");const N={title:"Tap the footer to fold or unfold"},q=n("input",{type:"checkbox",id:"expandable"},null,-1),B=n("label",{class:"wrapper",for:"expandable"},[n("div",{class:"paragraph"},[n("p",{class:"foldeable main-text"},[n("b",null,"Thanks for visiting the site!")]),n("p",{class:"main-text -small"},"Made with ❤️ in Nombre de Dios, Dgo."),n("p",{class:"foldeable main-text -small"},"If you want to find me elsewhere on the web, here’s where I hang out.")]),n("div",{class:"foldeable net-icons"},[n("a",{class:"net-icon",href:"https://www.instagram.com/gazaelofficial/",target:"_blank"},[n("img",{src:"/assets/instagram.69fd5da2.png",alt:"instagram picture"})]),n("a",{href:"https://twitter.com/azaelfernandez",target:"_blank",class:"net-icon"},[n("img",{src:"/assets/twitter.b8e4cb07.webp",alt:"twitter picture"})]),n("a",{class:"net-icon",href:"https://www.linkedin.com/in/gelacio-azael-f-a3694681",target:"_blank"},[n("img",{src:"/assets/linkedin.f075391e.png",alt:"linkedin picture"})]),n("a",{href:"https://open.spotify.com/user/1224585085?si=1_dzSXyqQ-ikeAGb2biZxg",target:"_blank",class:"net-icon"},[n("img",{src:"/assets/spotify.2d6619f9.png",alt:"spotify picture"})]),n("a",{class:"net-icon",href:"https://medium.com/@gazaelfernandez",target:"_blank"},[n("img",{src:"/assets/medium.e2b84950.png",alt:"medium picture"})])]),n("div",{class:"foldeable net-icons"},[n("a",{class:"net-icon",href:"https://github.com/kasec",target:"_blank"},[n("img",{src:"/assets/github.91200acc.svg",alt:"github picture"})]),n("a",{class:"net-icon",href:"https://gitlab.com/galfan",target:"_blank"},[n("img",{src:"/assets/gitlab.72257833.webp",alt:"gitlab picture"})])]),n("p",{class:"main-text -small"},"© 2020-present Gelacio Azael Fernandez Aldava. All Rights Reserved.")],-1);t();const G=C(((e,t)=>(a(),o("footer",N,[q,B]))));F.render=G,F.__scopeId="data-v-dc8c0fae";const S=[{name:"about-me",path:"/about-me",component:()=>g((()=>__import__("./about-me.943fa3e7.js")),["/assets/about-me.943fa3e7.js","/assets/about-me.6b0588b2.css","/assets/vendor.221782d8.js"]),props:!0},{path:"/blog",component:()=>g((()=>__import__("./blog.d1f69c6f.js")),["/assets/blog.d1f69c6f.js","/assets/blog.13466ab6.css","/assets/vendor.221782d8.js"]),children:[{name:"blog",path:"",component:()=>g((()=>__import__("./index.33780ea9.js")),["/assets/index.33780ea9.js","/assets/vendor.221782d8.js"]),props:!0},{name:"blog-spanish-bienvenidos",path:"spanish/bienvenidos",component:()=>g((()=>__import__("./bienvenidos.31cbe38c.js")),["/assets/bienvenidos.31cbe38c.js","/assets/vendor.221782d8.js"]),props:!0},{name:"blog-spanish-react-como-funciona-react",path:"spanish/react/como-funciona-react",component:()=>g((()=>__import__("./como-funciona-react.57c7d0cd.js")),["/assets/como-funciona-react.57c7d0cd.js","/assets/vendor.221782d8.js"]),props:!0}],props:!0},{name:"index",path:"/",component:{expose:[],setup:e=>(m({title:"Welcome to Azael Landing",meta:[{name:"description",content:"Now you can see watch every thing that I post about tech/ web development"}]}),(e,t)=>{const s=_,c=y,l=F;return a(),o(i,null,[n(s),n("section",null,[n(c)]),n(l)],64)})},props:!0},{name:"projects",path:"/projects",component:()=>g((()=>__import__("./projects.4044fd41.js")),["/assets/projects.4044fd41.js","/assets/projects.eec7e7f9.css","/assets/vendor.221782d8.js"]),props:!0}],W={};W.render=function(e,t){const n=s("router-view");return a(),o(n)},console.log({routes:S}),u(W,{routes:S});export{_,F as a,y as b};
