import vuePlugin from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Components from 'vite-plugin-components'
// import * as emoji from 'markdown-it-emoji'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

export default {
	alias: {
		components: resolve(__dirname, 'src/components'),
		content: resolve(__dirname, 'src/content')
	},
	plugins: [
		vuePlugin({
			include: [/\.vue$/, /\.md$/]
		}),
		Pages({
			extensions: ['vue', 'md'],
		}),
		Markdown({
			headEnabled: true,
			// markdownItSetup(md) {
			// 	md.use(emoji)
			// 	md.use(require('markdown-it-highlightjs'), { inline: true })
			// },
		}),
		Components({
			customLoaderMatcher: path => path.endsWith('.md'),
		}),
	],
	ssgOptions: {
		script: 'async',
		formatting: 'prettify',
		includedRoutes(routes: Array<any>) {
			console.log({ routes });
			
			// exclude all the route paths that contains 'foo'
			return routes
		  }
	},
}