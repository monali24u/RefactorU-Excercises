var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('<form method="post" action="/formsubmit"><input name="email" type="email"> <input type="submit"></form>');
})

app.post('/formsubmit', function (req, res) {
  res.status(200).redirect("/success");
})

app.get('/success', function (req, res) {
  res.send('Success!!');
})


var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
