
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
console.log("\nlastLetter(hello) is:-   "+output);
var output = lastLetter("island");
console.log("lastLetter(island) is:-  "+output);

//-----------------------------------------

function square(number){
  return number*number;
}

var result = square(3);
console.log("\nsquare(3) is:- "+ result);
var result = square(5);
console.log("square(5) is:- "+ result);

// -----------------------------------------

function negate(number){
  return number*(-1);
}

var result = negate(5);
console.log("\nnegate(3) is:- "+ result);
var result = negate(-8);
console.log("negate(5) is:- "+ result);

// -------------------------------------------

function toArray(one, two, three){
  var Arr = [];
  Arr.push(one,two,three);
  //var Array = [one, two, three];
  return Arr;
  
  //another version
//   for(var i=0; i<arguments.length; i++){
//     Arr.push(arguments[i]);
//   }
  
}

var result = toArray(1,4,5);
console.log("\ntoArray(1,4,5) is:-  ["+ result +"]");
var result = toArray(8,9,10);
console.log("toArray(8,9,10) is:-  ["+ result +"]");

// ---------------------------------------------

function startsWithA(str){

  if(str[0] === 'a' || str[0] === 'A'){
    return true;
  }
  else{
    return false;
  }
}

var result = startsWithA("aardvark");
console.log("\nstartsWithA('aardvark') is:- "+result);
var result = startsWithA("bear");
console.log("startsWithA('bear') is:- "+result);

// ------------------------------------------------

function excite(str){
  return str+"!!!";
}

var result = excite("yes");
console.log("\nexcite('yes') is:- "+result);
var result = excite("go");
console.log("excite('go') is:- "+result);

// -----------------------------------------

function sun(str){
  var result = str.indexOf("sun");

  if(result !== -1){
    return true;
  }
  else if(result === -1){
    return false;
  }
}

var output = sun('sundries');
console.log("\nsun('sundries') is:- " + output);
var output = sun('asunder');
console.log("sun('asunder') is:- " + output);
var output = sun('catapult');
console.log("sun('catapault') is:- " + output);

// ----------------------------------------------

function tiny(number){

  if(number >= 0 && number <=1){
    return true;
  }
  else{
    return false;
  }
}

var result = tiny(0.3);
console.log("\ntiny(0.3) is:- "+result);
var result = tiny(14);
console.log("tiny(14) is:- "+result);
var result = tiny(-5);
console.log("tiny(-5) is:- "+result);
// ----------------------------------------------

function getSeconds(str){
  var splited = str.split(':');
  var result = +(splited[0] * 60) + +splited[1];
  return result;
}

var outcome = getSeconds('01:30');
console.log("\ngetSeconds('01:30') is:- "+ outcome);
var outcome = getSeconds('10:25');
console.log("getSeconds('10:25') is:- "+ outcome);
