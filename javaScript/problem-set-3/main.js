
//string is a palindrome
function palindrome(myStr){

  var arry = myStr.split('');
  var end = (arry.length) - 1;
  var start = 0;

  while(start < end){
    if(arry[start] !== arry[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(palindrome("racecar"));

//-------------------------------------------------------------------------------
//dashInsert
function isOdd(charNum){
  if((charNum%2) === 1){
      return true;
  }
  return false;
}


function dashInsert(num){

    var myStr = num.toString();

    var firstDig = myStr[0];
    var oddDig = isOdd(firstDig);

    for(var i=1; i<myStr.length; i++){

      if(isOdd(myStr[i])){
        if(oddDig){
          firstDig += '-';
        }
        else{
          oddDig = true;
        }
      }
      else{
        oddDig = false;
      }

      firstDig += myStr[i];
    }

    return firstDig;
}

console.log(dashInsert(454793));

//----------------------------------------------------

function isChar(char){

  var code = char.charCodeAt(0);
  if((code >= 65 && code <= 65+25) || (code >= 97 && code <= 97+25)){
    return true;
  }
  return false;

}

function caesarCipher(str, shift){

	if (shift < 0){
    return caesarCipher(str, shift + 26);
  }

	var output = '';

	// Go through each character
	for(var i = 0; i < str.length; i ++){

		var c = str[i];

    if(isChar(c)){

			   // Get its code
  			var code = str.charCodeAt(i);

  			// Uppercase letters
  			if((code >= 65) && (code <= 90)){
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

  			// Lowercase letters
  			else if((code >= 97) && (code <= 122)){
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }

		}

		// Append
		output += c;
	}

	// All done!
	return output;
};

console.log(caesarCipher('Caesar Cipher', 2));
