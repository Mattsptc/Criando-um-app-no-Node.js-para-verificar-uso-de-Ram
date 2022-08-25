const http = require('http');
const host = 'http://localhost';
const port = 3000
const stats = './pcRamUsage.js'

http.createServer((req, res) => {
    res.send('<h1> Working</h1>')
}).listen(port, () => console.log(`Server is running in ${host}:${port}, ${stats}`))