const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express(); //creating an instance of the express app

//connect to mongodb
const dbURI = 'mongodb+srv://codealonguser:test123@nodejscodealong.t5d7a.mongodb.net/nodejscodealong?retryWrites=true&w=majority&appName=Nodejscodealong'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware % static files
app.use(express.static('public')); //anything in public folder will be made public 
app.use(express.urlencoded( {extended: true}))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    //infers status code, don't have to use .setHeader()

    // res.sendFile('./Views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });

//res.send('<p>about page</p>');

// app.use((req, res) => {
//     // res.status(404).sendFile('./Views/404.html', { root: __dirname })
//     res.status(404).render('404', {title: '404'});
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

// //mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const newblog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     newblog.save()
//         .then((result) => {
//         res.send(result)
//     })
//         .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById("67a051ac967e7d2303c299ed")
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });



// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });
// //redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


//404 page:  machine will check every request before this one, if nothing matches, then this gets sent to the browser



// app.get('/', (req, res) => {
//     //infers status code, don't have to use .setHeader()
//     res.send('<p>home page</p>');
// });   


// app.get('/', (req, res) => {
//     //infers status code, don't have to use .setHeader()
//     res.send('<p>home page</p>');
// });  