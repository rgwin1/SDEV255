const fs = require('fs'); //fs = file system, can be named anything, but conventionally named fs




// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);

//     }
//     console.log(data.toString());

// }) //asynchronous


// console.log('last line');

//writing files
// fs.writeFile('./docs/blog2.txt', 'hello,  again', () => {
//     console.log('file was written');
// })
//directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         } 
//         console.log('folder created');
//     });
// }else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }



//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');}
)}