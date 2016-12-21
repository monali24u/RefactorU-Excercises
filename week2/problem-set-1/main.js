
function letterCapitalize(str){

    var splitted = str.split(' ');
    var newstr = "";

    for(var i=0; i<splitted.length; i++){
      var temp = splitted[i];
      var upper = temp.substr(0,1).toUpperCase()+ temp.substr(1)+" ";
      newstr = newstr+upper;
    }
    return newstr;
    //console.log(newstr);
}

letterCapitalize("never eat shredded wheat");

// -----------------------------------------------------


function wordCount(str){

  var splitted = str.split(' ');
  return splitted.length;
  //console.log(splitted.length);
}

wordCount("never eat shredded wheat");

//-------------------------------------------------------

function primeTime(number){

  if(number >= 1 && number <= 216){

    if(number % 2 == 0) return false;

    for(var i=3; i<=Math.sqrt(number); i= i+2){

      if(number % i == 0){
        return false;
      }
    }

    return true;
  }
  else{
    console.log("Enter number between 1 and 216.")
  }

}

console.log(primeTime(3));
console.log(primeTime(6));

//---------------------------------------------
