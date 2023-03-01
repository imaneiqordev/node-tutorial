const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('welcome to our short history');
    }
    res.end(
        `<h1>Ooops!</h1>
         <p>we couldn't find the page u r looking for</p>
         <a href="/">back home</a>
`
    );
});

server.listen(5000); 