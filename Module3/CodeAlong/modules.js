const { people, ages } = require('./people');



console.log(people, ages);  

const os = require('os'); //built into node itself, importing to this file

console.log(os.platform(), os.homedir()); //object with a bunch of information about the current operating system

