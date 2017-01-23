
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var str = "";
for(var i=0; i<animals.length-1; i++){
  str = str + animals[i] + " ";
}
console.log(str);

//---------------------------------------------------------

var str1 = "";
for(var i=0; i<animals.length; i=i+2){
  str1 = str1 + animals[i] + " ";
}
console.log(str1);

//---------------------------------------------------------

var str2 = "";
for(var i=animals.length-1; i>=0; i--){
  str2 = str2 + animals[i] + " ";
}
console.log(str2);

//---------------------------------------------------------

var str3 = "";
for(var i=0; i<animals.length; i++){

  if(i == 0 || i == animals.length-1){
    str3 = str3 + animals[i] + " ";
  }
  else if(i >0 && i<animals.length){
    str3 = str3 + animals[i] + " ";
    str3 = str3 + animals[i] + " ";
  }
}

console.log(str3);
//---------------------------------------------------------
