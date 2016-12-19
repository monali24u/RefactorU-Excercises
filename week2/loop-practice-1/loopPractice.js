
for(var i=0; i<6; i++){
  var result = i*100;
  console.log(result);
}
//-----------------------------------------

for(var i=1; i<8; i++){
  var result;
  if(i === 1){
    result = i;
    console.log(result);
  }
  else{
    result = result * 2;
    console.log(result);
  }
}

// -----------------------------------------------

for(var i=1; i<=3; i++){
  var j;
  for(j = 1; j<=3; j++){
    console.log(i);
  }
  j =1;
}

//--------------------------------------------------

var value = 0;

while(value <= 10){

  if(value === 0){
    console.log(value);
    value += 2;
  }
  else{
    console.log(value);
    value += 2;
  }
}

//--------------------------------------------------

var j=0;
for(var i=1; i<6; i++){
  j= j+3;
  console.log(j);
}

//-----------------------------------------------

for(var j=9; j>=0; j--){
  console.log(j);
}

//---------------------------------
var k;
for(var j=1; j<4; j++){
  for(k=0; k<4; k++){
    console.log(k);
  }
  k = 0;
}
