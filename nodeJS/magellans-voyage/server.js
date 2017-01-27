var express = require ('express')
var logger = require ('morgan')


//Calling Express
var app = express();

//middleware
app.use(logger('dev'))

//Routes
require('./Controllers/routes.js')(app)
app.use('/static', express.static('./public'))

// app.get('/', function(req,res){
// res.send('It\'s running and alive')
// })

//PORT
var PORT = process.env.PORT || 8080;

// Listening to port
app.listen(PORT, function(err){
    if (err) {
        console.log("Server error on port", err);
    }
    else {
        console.log('Server is running on PORT', PORT);
    }
})
