const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => { //req = request, and res = response
    //console.log('request made'); //not doing anything at this point, have to invoke listen method
    

    //lodash get random number
    const num = _.random(0, 20); //will give random number everytime server function runs
    console.log(num)

    const greet = _.once(() => {
        console.log('Hello');

    });

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html'); //sending back plain text to the browser

    let path = './Views/';
    //switch statement to cycle through the different cases
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send an HTML file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
            // res.end();
        }
    })
    //send a file


    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end() //have to end the response back to the browser
    
});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000') //this is the port number, localhost = default value, and the function that runs when event is heard


});




//what is localhost
//loopback ip address - points back to own computer:  127.0.0.1 (HOME), listen for requests coming to our own computer.  
//port number represents a specific channel, gateway, or door on our computer, that certain server software can send to?
//server needs own port number (3000) is common for local web development, as long as nothing else is using it?
//localhost:3000
//ctrl+c cancels out of process in the terminal
//this code wont run in the browser, it's running on the back end