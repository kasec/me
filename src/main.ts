
import { ViteSSG } from 'vite-ssg'

import routes from 'pages-generated';

import App from './App.vue'

console.log({ routes });

export const createApp = ViteSSG(App, { routes })