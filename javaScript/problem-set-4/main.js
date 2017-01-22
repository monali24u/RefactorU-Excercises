
function addNumbers(str){

  var addition = 0;

  if(isNaN(str[0]) == false){
    addition = addition + Number(str[0]);
  }

  for(var i=1; i<str.length; i++){

    if(str[i] != ' '){

      if(isNaN(str[i-1]) == false  && isNaN(str[i]) == false){
        if(str[i-1] != ' '){
          addition = (addition * 10) + Number(str[i]);
        }
        else if(str[i-1] == ' '){
          addition = addition + Number(str[i]);
        }
      }
      else if(isNaN(str[i-1]) == true  && isNaN(str[i]) == false){
          addition = addition + Number(str[i]);
      }

    }
  }
  return addition;
}

var result = addNumbers('88Hello 3!');
console.log(result);
var result = addNumbers('55Hello');
console.log(result);
var result = addNumbers('5Hello 5');
console.log(result);


//-----------------------------------------------
//longestWord

function longestWord(str){

  var splitted = str.split(' ');
  splitted = splitted.map(function(word){ return word.replace(/[,.;!?%]/g, ''); });
  var lengthArry = splitted.map(function(word){ return word.length; });
  var maxLength = Math.max.apply(null, lengthArry);
  return splitted[lengthArry.indexOf(maxLength)];
}

console.log(longestWord("My name is monali. what is your friends name alexzander?"));

//---------------------------------------------------------------------------
//averageStringNumbers


function isNumber(word){
  if(isNaN(word) == false){
      return Number(word);
  }
}
function isChar(word){
  if(isNaN(word) == true){
    return word;
  }
}

function addition(arry){
  var addNum = parseInt(arry[0]);
  for(var i=1; i<arry.length; i++){
    addNum = addNum + parseInt(arry[i]);
  }
  return addNum;
}

function averageStringNumbers(str){

    var replacedStr = str.replace(/[,.;!?%' ']/g, '').split('');
    var numberStr = replacedStr.filter(function(char){ return isNumber(char);});
    var letters = replacedStr.filter(function(char){ return isChar(char);});
    var addResult = addition(numberStr);
    var final = Math.round(addResult/letters.length);
    return final;
}

console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));
