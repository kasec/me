import{_ as a,a as t}from"./app.38cd69fb.js";import{u as s,p as e,a as c,o,c as n,b as i,F as l,w as r,g as d}from"./vendor.221782d8.js";const m={data:()=>({img_src:""}),setup(){s({title:"If you don't know me, you can watch a little description about me below.",meta:[{name:"description",content:"A little description about me, Gelacio Azael Fernandez Aldava its my full name and I'm a JS Fullstack web developer"}]})},mounted(){const a=Math.ceil(7*Math.random()),t=document.querySelector("#cover-image"),s="./assets/images/pics/"+a+".jpg";console.log("adding something",s),t&&(t.dataset.src=s,t.dataset.srcset=s),this.img_src=s}},p=r("data-v-f8fc96b8");e("data-v-f8fc96b8");const f=d('<div class="cover-text" data-v-f8fc96b8><p class="main-text -title" data-v-f8fc96b8>Hi guys!</p><p class="main-text -subtitle" data-v-f8fc96b8>It is not another Meme&#39;s Page, its me in that picture.</p><p class="main-text" data-v-f8fc96b8>I&#39;m a <span class="-strong" data-v-f8fc96b8>Web Developer</span> and blogger from <span class="-strong" data-v-f8fc96b8>Durango, Mexico.</span></p></div>',1);c();const u=p(((s,e,c,r,d,m)=>{const p=a,u=t;return o(),n(l,null,[i(p),i("section",null,[i("img",{class:"lazy cover-image",loading:"lazy",src:d.img_src,alt:"random picture"},null,8,["src"]),f]),i(u)],64)}));m.render=u,m.__scopeId="data-v-f8fc96b8";export default m;