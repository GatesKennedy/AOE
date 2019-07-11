
//  Import HTTP Module
const http = require('http');

//  Define Server Routing
const server = http.createServer((req, res) => {
    //  Return Page: Hello
    if(req.url === '/') {
        res.write('Welcome to The All of Everything...');
        res.end();
    }
    //  Return Page: Dashboard
    if(req.url === '/home' || req.url === '/dash') {
        res.write('Are you curious?');
        res.end();
    }
    //  Return Page: Messages
    if(req.url === '/talk'){
        res.write('Will you talk?');
        res.end();
    }
    //  Return Page: Market
    if(req.url === '/more') {
        res.write('Do you need more?');
        res.end();
    }
    //  Return Page: Control
    if(req.url === '/tool') {
        res.write('You deserve the tools for Control...');
        res.end();
    }
});

//  Register Server Listener
server.listen(2000);

//  Log Success Message for Server
console.log('Listening on port 2000...');