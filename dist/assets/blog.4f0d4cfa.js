import{k as e,d as a,h as t,l as s,c as o,b as r,u as l,t as p,m as c,w as n,p as i,a as d,g as b,e as u,o as h,i as v,f as m}from"./vendor.fb03be93.js";import{p as w}from"./app.74dbe9e5.js";const g=n("data-v-7aebbe9a");i("data-v-7aebbe9a");const f={key:0,class:"mx-auto bg-yellow-300 bg-opacity-80 p-3 min-w-full"},x={class:"mt-3 border border-black"},y={class:" border-gray-500 border-l-8 pl-2"},k={class:" text-sm"},j={class:"text-xs"},_={class:"text-xs"};d();var I=e({expose:[],setup(e){var n,i;const d=b(),m=d.path.replace(/.*\//,"");console.log({name:m});const[I]=(d.path.match(/.+?\//g)||[]).map((e=>e.replace(/^\//,"").replace(/\/$/,""))),N=(null==(i=null==(n=w)?void 0:n[I])?void 0:i[m])||{},$=a(!1),C=()=>{console.log({path:d.path}),d.path.endsWith("/blog")?$.value=!1:$.value=!0};return t(d,C),s(C),g(((e,a)=>{const t=u("router-link");return $.value?(h(),o("div",f,[r(t,{class:" border-b border-black hover:bg-yellow-900 hover:text-white p-1",to:`/${l(I)}`},{default:g((()=>[v("Go back to "+p(l(I).toUpperCase()),1)])),_:1},8,["to"]),r("div",x,[r("div",y,[r("p",k,p(l(N).title),1),r("p",j,p(l(N).description),1),r("p",_,p(l(N).date),1)])])])):c("v-if",!0)}))}});I.__scopeId="data-v-7aebbe9a";const N={expose:[],setup:e=>(m({title:"Now you are watching my thoughts",meta:[{name:"description",content:"Now you can see watch every thing what I posting about tech and web development, here are listed all post what a published."}],script:[{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}]}),(e,a)=>{const t=I,s=u("router-view");return h(),o("main",null,[r(t),r(s)])})};export default N;