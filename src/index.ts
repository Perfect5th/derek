import * as http from 'http'

const server = http.createServer()
server.on('request', (req, res) => {
  req.resume()

  res.end('Hello, world!')
})
server.listen(8000)

console.log('Server is listening at http://localhost:8000/')
