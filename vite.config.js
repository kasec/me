import vuePlugin from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { serveHtml } from './plugins/serve-html-plugin'
import { buildPagesPlugin } from './plugins/build-pages-plugin'
import emoji from 'markdown-it-emoji'
import { resolve } from 'path'

export default (args) => {
	console.log({ args });
	return {
		alias: {
			components: resolve(__dirname, 'components'),
			pages: resolve(__dirname, 'pages'),
			content: resolve(__dirname, 'src/content')
		},
		build: {
			rollupOptions: {
				// input: ['src/pages/**.vue'],
				output: "dist"
			},
		},
		plugins: [
			vuePlugin({
				include: [/\.vue$/, /\.md$/]
			}),
			Markdown({
				markdownItSetup(md) {
					// for example
					md.use(emoji)
					md.use(require('markdown-it-highlightjs'), { inline: true })
				},
			}),
			serveHtml(),
			buildPagesPlugin()
		]
	}
}