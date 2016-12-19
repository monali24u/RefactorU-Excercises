
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


function postalCodeCheck(code){

    if(code.length === 5 || code.length === 10){

      if(code.length === 5){

        if(!isNaN(code) === true){
          console.log("Correct Input!");
        }
        else{
          console.log("takes only number.");
        }

      }
      else if(code.length === 10){

        if(code.charAt(5) === '-'){

          var splitted = code.split('-');
          var number = splitted[0]+splitted[1];

          if(!isNaN(number) === true){
            console.log("Correct Input!");
          }
          else{
            console.log("takes only number.");
          }

        }
        else{
          console.log("Input Must follow the XXXXX-XXXX format.");
        }
      }
      else{
        console.log("Wrong Input!! ... Input Must follow the XXXXX OR XXXXX-XXXX format. Try Again.");
      }

    }
    else{
      console.log("Wrong Input!! ... Input Must follow the XXXXX OR XXXXX-XXXX format. Try Again.");
    }

}

---------------------------------------------------------------------------------

function stateAbrivationCheck(state){

  if(state.length === 2){
    if (state.search(/[^A-Z]+/) === -1){
      console.log("Valid Input.");
    }
    else{
      console.log("NotValid!");
    }
  }
  else{
    console.log("Length must be two.");
  }

}

----------------------------------------------------------------------------------

function married(input){

    if(input.length === 3){
      if(input === 'YES' || input === 'Yes' || input === 'yes'){
        console.log("Valid Input");
      }
      else{
        console.log("Invalid Input.")
      }
    }
    else if(input.length === 2){
      if(input === 'NO' || input === 'No' || input === 'no'){
        console.log("Valid Input");
      }
      else{
        console.log("Invalid Input.")
      }
    }
    else{
      console.log("Invalid Input.")
    }
}
