import http from 'node:http'



const server = http.createServer((req, resp) => {
  console.log('Requisição recebida:', req.url)
  resp.end('Hello Wordddd')
})

server.listen(3333)