import { parse } from 'path'
import fs from 'fs'
import matched from 'matched'

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
	<div id="app"></div>
	<!-- script-outlet -->
</body>
</html>
`
const script = (path) => `
<script type="module">
	import { createApp } from 'vue'
	import "/index.css"
	import App from "${path}"
	createApp(App).mount('#app')
</script>
`

export const buildPagesPlugin = () => {
	return {
        name: "build-pages-plugin",
        apply: 'build',
		options(opts) {
            console.log({ opts });
			let inputOptions = {}
			const pattern = ["src/pages/**/*.vue"]

			const staticPaths = matched.sync('**/**.html', { realpath: true })

			staticPaths.forEach(staticFile => {
				fs.rmSync(staticFile)
			})

            console.log({rootDir: __dirname});

			const files = matched.sync(pattern, { realpath: true })

			files.forEach(filePath => {
				const pathObject = parse(filePath)

				const dirname = pathObject.dir.replace(/.*\/src\/pages(\/*)/, "") // get the parent dir if it is not a pages and if it does not exist I have to create

				if(dirname && !! fs.existsSync(dirname) === false) fs.mkdirSync(dirname)
				
				const  newFile = dirname ?  dirname + '/' + pathObject.name + '.html' : pathObject.name + '.html'  

				inputOptions = { ...inputOptions, [pathObject.name]: newFile }

				const writeStream = fs.createWriteStream(newFile)
				writeStream.write(document.replace(/<!-- script-outlet -->/, script(filePath.replace(/.*\/src/, "/src"))))
				writeStream.end()
			});

			const newOptions = {
				...opts,
				input: inputOptions
			}
            console.log({ newOptions });
			return newOptions
		},
	}
}