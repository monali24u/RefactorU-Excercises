
var input = prompt("Input any word!");
var leng = input.length;
console.log(alert("You entered: "+ input+"\nThere are "+leng+" characters in the word."+"\nThe third character is " + input[2] +"\nLowercase: "+input.toLowerCase()+"\nUppercase: "
+input.toUpperCase()+"\nExample: I have wanted a "+input+" since I was little boy."+"\nSubword: "
+ input.substr(1, leng-2)));
