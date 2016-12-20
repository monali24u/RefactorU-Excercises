//
 //var user = prompt("How many disaster victims do you wish to enter?");
//
// var nameArr = [];
// var phoneNumberArr = [];
// var street = [];
//
// for(var i=0; i<user; i++){
//
//   var name = prompt("Enter your name!");
//   var phoneNumber = prompt("Enter yor phone number!");
//   var street = prompt("Enter your address street");
//
//   nameArr.push(name);
//   phoneNumberArr.push(phoneNumber);
//   street.push(street);
// }

var nameArr = [];
var phoneNumberArr = [];
var street = [];

var nArr = document.getElementById("Name");
var pArr = document.getElementById("PhoneNumber");
var sArr = document.getElementById("StreetAddress");

function clearAndShow(){
  nArr.value = "";
  pArr.value = "";
  sArr.value = "";
}

function insert(){
   nameArr.push(nArr.value);
   phoneNumberArr.push(pArr.value);
   street.push(sArr.value);

   clearAndShow();
}
