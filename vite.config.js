import vuePlugin from '@vitejs/plugin-vue'
import { serveHtml } from './plugins/serve-html-plugin'
import { buildPagesPlugin } from './plugins/build-pages-plugin'

import { resolve } from 'path'

export default (args) => {
	console.log({ args });
	return {
		alias: {
			components: resolve(__dirname, 'components'),
			pages: resolve(__dirname, 'pages')
		},
		build: {
			rollupOptions: {
				input: ['src/pages/**.vue'],
				output: "dist"
			},
		},
		plugins: [
			vuePlugin(),
			serveHtml(),
			buildPagesPlugin()
		]
	}
}