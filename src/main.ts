
import { ViteSSG } from 'vite-ssg'

import routes from 'pages-generated';

console.log({ routes });

import App from './App.vue'

export const createApp = ViteSSG(App, { routes })