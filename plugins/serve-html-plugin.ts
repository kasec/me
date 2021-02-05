import { resolve } from 'path'
import { ViteDevServer } from 'vite'

const document = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite App</title>
		<link rel="stylesheet" href="/css/default.css">
		<!--preload-links-->
	</head>
	<body>
		<div id="app"><!--html-placeholder--></div>
		<!--js-placeholder-->
	</body>
</html>
`
const script = (path: string) => `
<script type="module">
	import { clientRendering } from '/vite-setup/clientRendering.ts'
	import "/css/index.css"

	clientRendering('${path}').then((component) => {
		console.log({ component })
		component.mount("#app")
	})
</script>
`
// el href haga match con alguna pagina del bunche.


// html is rehidrating the styles and i dont want that. I need that styles since beginning.
export default () => {
	return {
        name: 'serve-custom-html',
        apply: 'serve',
		configureServer(server: ViteDevServer) {
			server.middlewares.use(async (req, res, next) => {
				
				const url = req.originalUrl as string
				console.log({url});
				
				if(url === '/' || url.endsWith(".html")) {
					const file = url === '/' ? 'index.vue' : url.replace(/.html/, ".vue").replace(/^\/*/,"")
					const filePath = resolve(__dirname, 'src/pages', file)

					const html = await server.transformIndexHtml(url, document)
					
					const { serverRendering } = await server.ssrLoadModule('/vite-setup/serverRendering.ts')

					const htmlString = await serverRendering(filePath)

					const htmlFinal = html
					.replace(/<!--html-placeholder-->/, htmlString)
					.replace(/<!--js-placeholder-->/, script(filePath))
					
					return res.end(htmlFinal)
				}

				next()
			})
		},
	}
}