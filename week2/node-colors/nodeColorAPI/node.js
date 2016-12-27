
const request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(err, res, body) {

    var result = "";
    var obj = JSON.parse(body);

    for(var i=0; i<obj.length; i++){

      var subObj = obj[i];
      if(subObj['name'].toLowerCase() === process.argv[2]){
          var arr = subObj['rgb'];
          for(var prop in arr){
            result = result + arr[prop] + " ";
          }
          console.log(result);
          // return result;
      }
    }

});
