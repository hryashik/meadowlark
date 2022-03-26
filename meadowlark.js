const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 3000

let server = http.createServer((req, res) => {
   res.end('Hello from nodejs!')
})

server.listen(port, () => console.log('Sever is starting'))