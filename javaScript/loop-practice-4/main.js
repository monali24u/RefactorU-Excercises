var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

//------------------------------------------------------------------------------

for(var i=0; i<months.length; i++){

  for(var j=0; j<months[i].days; j++){
    
    console.log(months[i].name + " " + (j+1));
  }
}

//------------------------------------------------------------------------------

var count = 0;
var m = 0;

for(var k=1; k<=24; k++){
  if(k < 12){
    for(var j=0; j<60; j++){
      for(var i=0; i<60; i++){
        count++;
        console.log(addZero(k) + ':'+ addZero(j) + ':' + addZero(i) + ' AM');
      }
    }
  }
  else if(k === 12){
    for(var j=0; j<60; j++){
      for(var i=0; i<60; i++){
        count++;
        console.log(k + ':'+ addZero(j) + ':' + addZero(i) + ' PM');
      }
    }
  }
  else if(k>12 && k<24){
      m++;
    for(var j=0; j<60; j++){
      for(var i=0; i<60; i++){
        count++;
        console.log(addZero(m) + ':'+ addZero(j) + ':' + addZero(i) + ' PM');

      }
    }
  }
  else if(k === 24){
    for(var j=0; j<60; j++){
      for(var i=0; i<60; i++){
        count++;
        console.log(12 + ':'+ addZero(j) + ':' + addZero(i) + ' AM');
      }
    }
  }
}
console.log(count);

//-----------------------------------------------------------------------------

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//------------------------------------------------------------------------------
