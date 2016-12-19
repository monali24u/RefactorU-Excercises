
var output = "";
function tripleFive() {

  for(var i=0; i<3; i++){
    output +=" Five!"
  }
  console.log(output);
}

tripleFive();
//------------------------------------------
function lastLetter(str){
  var result = str.substr(str.length-1, 1);
  return result;
}

var output = lastLetter("hello");
console.log("lastLetter(hello) is:-   "+output);

var output = lastLetter("island");
console.log("lastLetter(island) is:-  "+output);

//-----------------------------------------

function square(number){
  return number*number;
}

var result = square(3);
console.log("square(3) is:- "+ result);
var result = square(5);
console.log("square(5) is:- "+ result);

// -----------------------------------------

function negate(number){
  return number*(-1);
}

var result = negate(5);
console.log("negate(3) is:- "+ result);
var result = negate(-8);
console.log("negate(5) is:- "+ result);

// -------------------------------------------
