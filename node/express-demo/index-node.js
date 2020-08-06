const http = require('http');
const server = http.createServer();
const port = 1234;
server.on('request', (request, response) => {
    if(request.url === '/'){
        response.end('Hello World!')
    }
});
server.listen(port, () => console.log(`Example app listening on port ${port}!`));



