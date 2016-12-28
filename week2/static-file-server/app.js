// Requires \\
var express = require('express');

// Create Express App Object \\
var app = express();

// Application Configuration \\

app.use(express.static('./public'));
app.get('/', function(req,res){
  res.send("hello?")
})

//Routes
app.get('/', function(req, res){
  res.send('Hello')
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


//Serve a static file

var fs = require('fs');
var fileContents = fs.readFileSync('data.txt');

app.get('/', function(req, res){
  res.header('Content-Type', 'text/html');
  res.send(fileContents);
})

var port = 4000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})



//Make it Asynchronous

var fs = require('fs');
app.get('/', function(req, res){

  fs.readFile('data.txt', function(err, data){

    if(err){
      res.header('Content-Type', 'text/html');
      res.send("ERROR:- data not found", err);
    }
    else{
      res.header('Content-Type', 'text/html');
      res.send(data);
    }
  })
})

var port = 5000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})


//Static file Server

var express = require('express');
var app = express();
app.use(express.static('./public'));

var port = 3000
app.listen(port, function(err){
  if(err){
    console.log('error ' + err);
  }
  else{
    console.log('Server running o≈n port ' + port);
  }
})
