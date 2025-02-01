const http = require('http');



const server = http.createServer((req, res) => { //req = request, and res = response
    console.log('request made'); //not doing anything at this point, have to invoke listen method

})


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000') //this is the port number, localhost = default value, and the function that runs when event is heard
});




//what is localhost
//loopback ip address - points back to own computer:  127.0.0.1 (HOME), listen for requests coming to our own computer.  
//port number represents a specific channel, gateway, or door on our computer, that certain server software can send to?
//server needs own port number (3000) is common for local web development, as long as nothing else is using it?
//localhost:3000