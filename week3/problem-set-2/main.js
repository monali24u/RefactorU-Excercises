
function firstReverse(str){
  return str.split("").reverse().join("");
}

console.log(firstReverse("coderbyte"));
console.log(firstReverse("I Love Code"));

//-----------------------------------------------------------------

function swapCase(str){

  var newStr = "";

  for(var i=0; i<str.length; i++){
    if(str[i]  === str[i].toLowerCase()){
      newStr += str[i].toUpperCase();
    }
    else{
      newStr += str[i].toLowerCase();
    }
  }

    return newStr;
}

console.log(swapCase("Hello"));
console.log(swapCase("World"));

//-------------------------------------------------------------------

function letterCount(str){

  var splitted = str.split(' ');

  var maxCount = 1;
  var maxStr = 0;
  var flag = false;

  for(var j=0; j<splitted.length; j++){

    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(splitted[j]);

    if(hasDuplicates === true){

      var myMap = new Map();
      flag = true;
      // add data into myMap
      for (var i = 0; i < splitted[j].length; i++){

            var char = splitted[j].charAt(i);

            if (!myMap.has(char)){
                myMap.set(char, 1);
            }
            else{
                var val  = myMap.get(char)
                val = val + 1;
                myMap.set(char, val);

                if(maxCount < val){
                  maxCount = val;
                  maxStr = splitted[j];
                }
            }
        }
    }

  }

  if(flag === true){
    return maxStr;
  }
  else{
    return -1;
  }

}

console.log(letterCount("Today, is the greatest day ever!"));
