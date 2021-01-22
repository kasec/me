import { resolve } from 'path'

const document = `
<html lang="en">
<head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
	<script type="module" src="/@vite/client"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to my Page!</title>
    <link rel="icon" href="/assets/images/logo/logo.svg">
    <link rel="stylesheet" href="/css/default.css">
</head>
<body>
	<div id="app"></div>
	<!-- script-outlet -->
</body>
</html>
`

const scriptTemp = (path) => `
<script type="module">
	import { render } from '/render.js'
	import "/index.css"

	render('${path}').then((component) => {
		component.mount("#app")
	})
</script>
`
// podria buscar todos los href de las vistas y cambiarlas o agregarles ".html" al momento de hacerle build
// el href haga match con alguna pagina del bunche.

export const serveHtml = () => {
	return {
        name: 'serve-custom-html',
        apply: 'serve',
		configureServer(server) {
			server.middlewares.use(async (req, res, next) => {
				const url = req.originalUrl
				
				if(url === '/' || url.endsWith(".html")) {
					const file = url === '/' ? 'index.vue' : url.replace(/.html/, ".vue").replace(/^\/*/,"")
					
					const importPath = resolve(__dirname, './src/pages', file)
					
					return res.end(document.replace(/<!-- script-outlet -->/, scriptTemp(importPath)))
				}

				next()
			})
		},
	}
}