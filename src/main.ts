
import { ViteSSG } from 'vite-ssg'

import routes from 'pages-generated';
import './index.css'
import App from './App.vue'

export const createApp = ViteSSG(App, { routes })