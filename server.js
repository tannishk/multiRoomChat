'use strict';
const express = require('express');
const app = express();
const chitChat = require('./app');
// How to use middle ware
// app.use('/dashboard',helloMiddleware);


// Define Properties
app.set('port',process.env.PORT || 8080);
app.use(express.static('public'));
app.set('views','views');
app.set('view engine','ejs');

// Use middleWare
app.use('/',chitChat.router);


// app.get('/',function (request,response,next) {
//     //response.send('<h1>Hello Express'+request.hello+'</h1>');
//     // response.sendFile(__dirname+'/views/login.ejs'); // Render File
//     response.render('login',{
//         pageTitle:'My Login Page'
//     });
//     console.log(request.hello);
// });

//
// app.get('/dashboard',(request,response)=>{
//     response.send('<h1>This is the dashboard </h1>');
// });


app.listen(app.get('port'),function () {
    console.log("Server is running");
});