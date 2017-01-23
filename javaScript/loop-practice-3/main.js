var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//------------------------------------------------------------------------------

var str = "";
for(var i=0; i<students.length; i++){
  str = str + students[i].age + " ";
}
console.log(str);

//------------------------------------------------------------------------------

var str1 = "";
for(var i=0; i<students.length; i++){
  str1 = str1 + students[i].name + ", " + students[i].city + " ";
}
console.log(str1);

//------------------------------------------------------------------------------

var str2 = "";
for(var i=0; i<students.length; i++){
  if(students[i].city === 'Boulder'){
    str2 = str2 + students[i].name + " is from " + students[i].city + " ";
  }
}
console.log(str2);

//------------------------------------------------------------------------------

var str3 = "";
for(var i=0; i<students.length; i++){
  if(students[i].age > 25){
    str3 = str3 + students[i].name + " is older than 25 ";
  }
}
console.log(str3);

//------------------------------------------------------------------------------
