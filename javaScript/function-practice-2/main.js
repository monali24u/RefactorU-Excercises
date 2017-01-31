
var person ={
  name:"Luisa",
  age: 25,
};

function getName(obj){

  for(var prop in obj){
      if(prop === 'name'){
        return obj[prop];
      }
  }
}

console.log(getName(person));

//----------------------------------------------------------

var strArr = ['javascript', 'is', 'awesome'];
var strArr2 = ['what', 'happened', 'to', 'my', 'function'];

function totalLetters(arry){
  var leng = 0;

  for(var i=0; i<arry.length; i++){
    leng = leng + arry[i].length;
  }

  return leng;
}

console.log(totalLetters(strArr));
console.log(totalLetters(strArr2));

//----------------------------------------------------------

function keyValue(first, second){
  var obj = new Object();
  obj[first] = second;
  return obj;
}

console.log(keyValue("city", "Denver"));

//------------------------------------------------------------

function negativeIndex(arry, num){
  var index = arry.length + num;

  return arry[index];
}

var arr1 = ['a','b','c','d','e'];
var arr2 = ['jerry', 'sarah', 'sally'];

console.log(negativeIndex(arr1, -2));
console.log(negativeIndex(arr2, -1));

//--------------------------------------------------------------

function removeM(str){

for(var i=0; i<str.length; i++){
  if(str[i] === 'm'){
    str = str.replace('m', '');
  }
}
  return str;
}

console.log(removeM("family"));
console.log(removeM("memory"));

//---------------------------------------------------------------

function printObject(obj){

  for(var prop in obj){
    console.log(prop + " is "+ obj[prop]);
  }
}

var alpha ={
  a:10,
  b:20,
  c:30
};

var person ={
  firstName:'pork',
  lastName:'chops'
};

console.log(printObject(alpha));
console.log(printObject(person));

//---------------------------------------------------------------

function vowels(str){

  var vowelArr = ['a','e','i','o','u'];
  var result = [];

  for(var i=0; i<str.length; i++){

    for(var j=0; j<vowelArr.length; j++){

      if(str[i].toLowerCase() === vowelArr[j]){
        result.push(str[i]);
      }
    }
  }

  return result;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

//------------------------------------------------------------------

function twins(arry){

  for(var i=0; i<arry.length; i=i+2){

    if(arry[i] !== arry[i+1]){
      return false;
    }
  }

  return true;
}

console.log(twins(['a','a','b','b','c','c']));
console.log(twins(['a','a','b','c','d','d']));
console.log(twins(['a','a','b','z']));
console.log(twins(['a','a', 'undefined']));


//-----------------------------------------------------------------

function or(arry){

  for(var i=0; i<arry.length; i++){

    if(arry[i] === true){
      return true;
    }
  }
  return false;

}

console.log("\n"+ or([false, false, true, false]));
console.log(or([false,false,false]));
console.log(or([]));

//----------------------------------------------------------------

function unique(arry){

    var seen = {};
    var out = [];

    for(var i=0; i<arry.length; i++){

      if(seen[arry[i]] !== 1){
        seen[arry[i]] = 1;
        out.push(arry[i]);
      }
    }

    return out;
}

console.log(unique(['a','b','a','c','d','d']));
console.log(unique(['todd','avery', 'maria', 'avery']));

//----------------------------------------------------------------
