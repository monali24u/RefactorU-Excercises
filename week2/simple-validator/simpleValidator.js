
function checkInput(userInput){

    if(userInput.charAt(0) === 'B' && userInput.length ===7){
      console.log("true");
    }
    else{
      console.log("false");
    }
}
--------------------------------------------------------

function phNumCheck(userInput){

   var arr = userInput.split('-');

   for( var i = 0; i < arr.length; i++ ) {
       arr[i] = userInput.indexOf(arr[i]);
   }

   if(arr[1] === 4 && arr[2] === 8 && arr.length === 3){
     console.log("true")
   }
   else{
     console.log("false");
   }

}

----------------------------------------------------------

function birthDateChecker(birthdate){

  if(birthdate.charAt(2) === '/' && birthdate.charAt(5) === '/' && birthdate.length === 8){
    var arr = birthdate.split('/');

    if(((arr[0] > 1 && arr[0] < 12) || (arr[0] === 1 || arr[0] ===12))){

      if((arr[1] > 1 && arr[1] < 31) || (arr[1] === 1 || arr[1] === 31)){

        if((arr[2] > 1 && arr[2] < 99) || (arr[2] === 1 || arr[2] === 99)){

          console.log("correct input!!");
        }
        else
        {
          console.log("Year is not a valid number.");

        }

      }
      else
      {
        console.log("Day is not a valid number.");

      }
    }
    else
    {
      console.log("Month is not a valid number.");

    }
}
else
{
  console.log("Wrong Input!! ... Input Must follow the MM/DD/YY. format. Try Again.");
}

}

------------------------------------------------------------------------------------------------
