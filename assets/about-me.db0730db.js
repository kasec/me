import{_ as a}from"./app.5af2f8bc.js";import{u as t,p as e,a as s,o,c as n,e as d,b as c,F as i,w as l,j as r}from"./vendor.ab4ea872.js";const m={data:()=>({img_src:""}),setup(){t({title:"If you don't know me, you can watch a little description about me below.",meta:[{name:"description",content:"A little description about me, Gelacio Azael Fernandez Aldava its my full name and I'm a JS Fullstack web developer"}]})},mounted(){const a=Math.ceil(7*Math.random()),t=document.querySelector("#cover-image"),e="./assets/images/pics/"+a+".jpg";console.log("adding something",e),t&&(t.dataset.src=e,t.dataset.srcset=e),this.img_src=e}},p=l("data-v-fd647f74");e("data-v-fd647f74");const f=r('<div class="cover-text" data-v-fd647f74><p class="main-text -title" data-v-fd647f74>Hi guys!</p><p class="main-text -subtitle" data-v-fd647f74>It is not another Meme&#39;s Page, its me in that picture.</p><p class="main-text" data-v-fd647f74>I&#39;m a <span class="-strong" data-v-fd647f74>Web Developer</span> and blogger from <span class="-strong" data-v-fd647f74>Durango, Mexico.</span></p></div>',1);s();const u=p(((t,e,s,l,r,m)=>{const p=a;return o(),n(i,null,[d(" <TopBar/> "),c("section",null,[c("img",{class:"lazy cover-image",loading:"lazy",src:r.img_src,alt:"random picture"},null,8,["src"]),f]),c(p)],64)}));m.render=u,m.__scopeId="data-v-fd647f74";export default m;