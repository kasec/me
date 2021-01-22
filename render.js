// import VueApp from './App.vue'
import { createSSRApp } from 'vue'

export function render(url) {
  console.log({ url });
  
  return import(url).then(App => {
    return createSSRApp(App.default, { url })
  }) 
}