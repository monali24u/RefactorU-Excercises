
function addNumbers(str){

  var addition = 0;
  var temp;
  for(var i=0; i<str.length; i++){

      var isumb = str[i] - '0';

      if(isNaN(isumb) == false && str[i] != ' '){
        temp = 0;

        while(isNaN(str[i] - '0') == false && str[i] != ' '){
          temp = (temp*10) + Number(str[i]);
          i++;
        }

        addition = addition + temp;
      }

  }

  return addition;
}

var result = addNumbers('88Hello 3 33!');
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
