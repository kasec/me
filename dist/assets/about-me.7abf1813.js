import{_ as a,a as s}from"./app.98400170.js";import{p as t,a as e,o,c as n,b as r,F as c,w as i,g as d}from"./vendor.221782d8.js";const l={components:{Footer:a,TopBar:s},data:()=>({img_src:""}),mounted(){const a=Math.ceil(7*Math.random()),s=document.querySelector("#cover-image"),t="./assets/images/pics/"+a+".jpg";console.log("adding something",t),s&&(s.dataset.src=t,s.dataset.srcset=t),this.img_src=t}},m=i("data-v-113a8413");t("data-v-113a8413");const p=d('<div class="cover-text" data-v-113a8413><p class="main-text -title" data-v-113a8413>Hi guys!</p><p class="main-text -subtitle" data-v-113a8413>It is not another Meme&#39;s Page, its me in that picture.</p><p class="main-text" data-v-113a8413>I&#39;m a <span class="-strong" data-v-113a8413>Web Developer</span> and blogger from <span class="-strong" data-v-113a8413>Durango, Mexico.</span></p></div>',1);e();const g=m(((t,e,i,d,l,m)=>{const g=s,v=a;return o(),n(c,null,[r(g),r("section",null,[r("img",{class:"lazy cover-image",loading:"lazy",src:l.img_src,alt:"random picture"},null,8,["src"]),p]),r(v)],64)}));l.render=g,l.__scopeId="data-v-113a8413";export default l;