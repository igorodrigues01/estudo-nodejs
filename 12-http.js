const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Here is home page');
        res.end()
    }
    if (req.url === '/about') {
        res.write('Here is about');
        res.end()
    }
    res.end(`<h1>Oppss!!!</h1><br /><a href="/">Back as Home</a>`)

})

server.listen(5000, () => console.log('Runnig http://localhost:5000'))