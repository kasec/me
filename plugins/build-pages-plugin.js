import { parse, resolve } from 'path'
import fs from 'fs-extra'
import matched from 'matched'
import vite from 'vite'

const document = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to my Page!</title>
    <link rel="icon" href="/assets/images/logo/logo.svg">
	<link rel="stylesheet" href="/css/default.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
    <!-- <script data-ad-client="ca-pub-3566337185147445" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173486203-1"></script> -->
    <!-- <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-173486203-1');
    </script> -->
</head>
<body>
	<div id="app"><!--html-placeholder--></div>
	<!--js-placeholder-->
</body>
</html>
`
const script = (path) => `
<script type="module">
	import { createSSRApp } from 'vue'
	import "/css/index.css"
	import App from "${path}"

	createSSRApp(App).mount('#app')
</script>
`

export const buildPagesPlugin = () => {
	return {
        name: "build-pages-plugin",
		apply: 'build',
		options(opts) {
			let inputOptions = {}
			const pattern = ["src/pages/**/*.vue"]

			const staticPaths = matched.sync(['**/**.html', "!dist/**/**.html"], { realpath: true })

			staticPaths.forEach(staticFile => {
				fs.rmSync(staticFile)
			})

			const files = matched.sync(pattern, { realpath: true })

			files.forEach(filePath => {
				const pathObject = parse(filePath)

				const dirname = pathObject.dir.replace(/.*(\/*)src\/pages(\/*)/, "") // get the parent dir if it is not a pages and if it does not exist I have to create

				if(dirname && !! fs.existsSync(dirname) === false) fs.ensureDirSync(dirname);

				const newFile = dirname ?  dirname + '/' + pathObject.name + '.html' : pathObject.name + '.html'  

				inputOptions = { ...inputOptions, [pathObject.name]: newFile }

				const writeStream = fs.createWriteStream(newFile)
				writeStream.write(document.replace(/<!--js-placeholder-->/, script(filePath.replace(/.*\/src/, "/src"))))
				writeStream.end()
			});

			const newOptions = {
				...opts,
				input: inputOptions
			}

			return newOptions
		},
		async transformIndexHtml(html, { path }) {

			const fileName = path.replace(/.html$/, '.vue').replace(/^\//, "")

			console.log({ fileName });

			const filePath = resolve(__dirname, "src/pages", fileName)

			console.log({ filePath });

			const server = await vite.createServer()

			const { serverRendering } = await server.ssrLoadModule('vite-setup/serverRendering.ts')

			const htmlString = await serverRendering(filePath)
			console.log({ html });
			const htmlFinal = html
				.replace(/<!--html-placeholder-->/, htmlString)
				// .replace(/<!--js-placeholder-->/, script(filePath))
			
			return htmlFinal
		},
		closeBundle() {
			const staticPaths = matched.sync(['**/**.html', "!dist/**/**.html"], { realpath: true })

			staticPaths.forEach(staticFile => {
				fs.rmSync(staticFile)
			})
		}
	}
}