const http = require('http')
const redirectTarget = process.env.REDIRECT_TARGET
const listenPort = process.env.PORT || 9000

const server = http.createServer((req, res) => {
	res.writeHead(302, {
    'Location': redirectTarget,
  })
  res.end()
})

server.on('clientError', (err, socket) => {
  console.error(err.stack)
})

server.listen(listenPort)
