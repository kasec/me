import { readFile } from 'fs'
import { createServer } from 'http'
import { resolve } from 'path'
import mime from 'mime'
import { createFilter } from 'rollup-pluginutils'
import pug from 'pug'
import viewHandler from './view-handler-plugin'
let server
const pattern = /\.view\.(?:pug)$/
/**
 * Serve your rolled up bundle like webpack-dev-server
 * @param {ServeOptions|string|string[]} options
 */
function serve (options = { contentBase: '' }) {
  if (Array.isArray(options) || typeof options === 'string') {
    options = { contentBase: options }
  }
  options.contentBase = Array.isArray(options.contentBase) ? options.contentBase : [options.contentBase || '']
  options.port = options.port || 10001
  options.headers = options.headers || {}
  options.openPage = options.openPage || ''
  mime.default_type = 'text/plain'
  const development = options.isDev

  if (options.mimeTypes) {
    mime.define(options.mimeTypes, true)
  }
  const cleanId = function(str) {
    return str.replace(/(.*src\/)/, '').replace(/(views\/)/, '')
  }
  const requestListener = (request, response) => {
    console.log('requestListener', request.url);
    const urlPath = decodeURI(request.url.split('?')[0])

    Object.keys(options.headers).forEach((key) => {
      response.setHeader(key, options.headers[key])
    })

    readFileFromContentBase(options.contentBase, urlPath, function (error, content, filePath) {
      if (!error) {
        return found(response, filePath, content)
      }
      if (error.code !== 'ENOENT') {
        response.writeHead(500)
        response.end('500 Internal Server Error' +
          '\n\n' + filePath +
          '\n\n' + Object.values(error).join('\n') +
          '\n\n(rollup-plugin-serve)', 'utf-8')
        return
      }
      if (options.historyApiFallback) {
        const fallbackPath = typeof options.historyApiFallback === 'string' ? options.historyApiFallback : '/index.html'
        readFileFromContentBase(options.contentBase, fallbackPath, function (error, content, filePath) {
          if (error) {
            notFound(response, filePath)
          } else {
            found(response, filePath, content)
          }
        })
      } else {
        notFound(response, filePath)
      }
    })
  }
  // release previous server instance if rollup is reloading configuration in watch mode
  console.log('server var => ', server);

  if (server) {
    server.close()
  } else {
    closeServerOnTermination()
  }
  
  server = createServer(requestListener).listen(options.port, options.host)
  
  const pugFilter = createFilter(['**/*.pug']);
  const cssFilter = createFilter(['**/*.css']);
  const jsFilter = createFilter(['**/*.js']);
  let viewsInstance;
  let running = options.verbose === false
  return {
    name: 'serve',
    buildStart() {
      viewsInstance = viewHandler({pattern: /\.static\.(?:pug)$/})
    },
    resolveId(id) {
      return viewsInstance && viewsInstance.resolveId(id)
    },
    load(id) {
      if(!pugFilter(id)) {
        return ''
      } else return viewsInstance.load(id)
    },
    transform(code, id) {
      if(!pugFilter(id)) {
        return null
      }
      const fileName = cleanId(id)
      this.emitFile({
        name: fileName,
        fileName: fileName,
        type: 'asset',
        source: code
      })
      return viewsInstance.transform(code, id)
    },
    generateBundle () {
      console.log('development', development);
      if (!running) {
        running = true

        // Log which url to visit
        const url = 'http' + '://' + (options.host || 'localhost') + ':' + options.port
        options.contentBase.forEach(base => {
          console.log(green(url) + ' -> ' + resolve(base))
        })
      }
    }
  }
}

function readFileFromContentBase (contentBase, urlPath, callback) {
  let filePath = resolve(contentBase[0] || '.', '.' + urlPath)
  const options = {
    doctype: 'html',
    compileDebug: true,           
    sourceMap: true,              
    inlineRuntimeFunctions: false,
    basedir: '_dist'
  }
  // Load index.html in directories
  if (urlPath.endsWith('/')) {
    filePath = resolve(filePath, 'index.static.pug')
  }
  console.log('filePath==',filePath.endsWith('.pug'));
  if(filePath.endsWith('.pug')) {
    pug.renderFile(filePath, options, function(error, content) {
      console.log('typeof content', typeof content);
      console.log('filePath', filePath.replace(pattern, '.html'));
      callback(error, content, filePath.replace(pattern, '.html'))
    })
  }
  else {
    readFile(filePath, (error, content) => {
      if (error && contentBase.length > 1) {
        // Try to read from next contentBase
        readFileFromContentBase(contentBase.slice(1), urlPath, callback)
      } else {
        // We know enough
        callback(error, content, filePath)
      }
    })
  }
}

function notFound (response, filePath) {
  response.writeHead(404)
  response.end('404 Not Found' +
    '\n\n' + filePath +
    '\n\n(rollup-plugin-serve)', 'utf-8')
}

function found (response, filePath, content) {
  console.log('contentType', mime.getType(filePath) || 'text/html');
  response.writeHead(200, { 'Content-Type': mime.getType(filePath) || 'text/html' })
  response.end(content, 'utf-8')
}

function green (text) {
  return '\u001b[1m\u001b[32m' + text + '\u001b[39m\u001b[22m'
}

function closeServerOnTermination () {
  const terminationSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP']
  console.log('closeServerOnTermination');
  terminationSignals.forEach(signal => {
    process.on(signal, () => {
      if (server) {
        server.close()
        process.exit()
      }
    })
  })
}

export default serve