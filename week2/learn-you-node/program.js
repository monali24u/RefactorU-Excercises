console.log("HELLO WORLD")

//---------------------------------------------------
function sum(array){

  var result = 0;
  for(var i=2; i<array.length; i++){
    result = result + +array[i];
  }
  console.log(result);
}

sum(process.argv);

//---------------------------------------------------
var fs = require('fs');
var obj = fs.readFileSync(process.argv[2]);
var str = obj.toString();
var splitted = str.split('\n');
console.log(splitted.length-1);

//---------------------------------------------------
var fs = require('fs')
function readDirectory() {
  fs.readFile(process.argv[2], function callback(err, data) {

    if(err){
      return console.log(err);
    }

    var str = data.toString();
    var splitted = str.split('\n');
    console.log(splitted.length-1);

  })
}
readDirectory()

//---------------------------------------------------
var fs = require('fs');
function filterFileList(){

  fs.readdir(process.argv[2], function callback(err, list){

    if(err){
        return console.log(err);
    }
    // console.log(list);

    for(var i=0; i<list.length; i++){

      var splitted = list[i].split('.');
        if((splitted[splitted.length-1] === process.argv[3]) && splitted.length == 2){
          console.log(list[i]);
        }
    }

  })
}


//---------------------------------------------------
var filterFn = require('./mymodule.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })

//---------------------------------------------------
var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log(data);
  })
})


//------------------------------------------------------
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {

   response.pipe(bl(function (err, data) {

     if (err)
       return console.error(err);

     data = data.toString();
     console.log(data.length);
     console.log(data);
   }));

 });

 //-------------------------------------------------------
 var http = require('http');
 var bl = require('bl');

 var urls = process.argv.slice(2),
     results = [],
     resultsCount = 0;

 urls.forEach(function (url, i) {
   http.get(url, function (response) {

     response.pipe(bl(function (err, data) {

       if (err)
          return console.error(err);

       data = data.toString();
       results[i] = data;
       resultsCount++;

       if (resultsCount === urls.length) {
         results.forEach(function (result) {
           console.log(result);
         });
       }
     }));
   });
 });

//--------------------------------------------------------------
var net = require('net');
var server = net.createServer(function (socket) {

  socket.end(getFormattedCurrentTime() + "\n");

});

server.listen(process.argv[2]);

function getFormattedCurrentTime() {
  var now = new Date();

  var data = [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
       + " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":");

  return data;
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

//--------------------------------------------------------------
var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type' : 'text/plain' });

  fs.createReadStream(file).pipe(res);
})
server.listen(port);


//---------------------------------------------------------------
var map = require('through2-map');
var http = require('http');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
})
server.listen(port);


//----------------------------------------------------------------
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      strtime = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = getUnixTimestamp(strtime);
  }
  else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(process.argv[2]);


function getUnixTimestamp(strtime) {
  return {
    unixtime: getTimestamp(strtime)
  };
}

function getTimestamp(strtime) {
  return Date.parse(strtime);
}

function getTimeObj(strtime) {
  var date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
