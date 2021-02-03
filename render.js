// import VueApp from './App.vue'
import { createSSRApp } from 'vue'

export function render(url) {
  return import(url).then(App => {
    return createSSRApp(App.default, { url })
  }) 
}