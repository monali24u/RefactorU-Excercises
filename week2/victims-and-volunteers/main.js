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

var vArr = document.getElementById("Role");
var nArr = document.getElementById("Name");
var pArr = document.getElementById("PhoneNumber");
var sArr = document.getElementById("StreetAddress");

var victimArr = [];
var volunteerArr = [];

var obj = {
    Role: '',
    Name: '',
    PhoneNumber: '',
    StreetAddress: ''
};


function clearAndShow(){
  vArr.value = "";
  nArr.value = "";
  pArr.value = "";
  sArr.value = "";
}

function insert(){

  var obj1 = new Object();
  obj1['Role'] = vArr.value;
  obj1['Name'] = nArr.value;
  obj1['PhoneNumber'] = pArr.value;
  obj1['StreetAddress'] = sArr.value;

  if(vArr.value === "victim"){
      victimArr.push(obj1);
  }
  else if(vArr.value === "volunteer"){
      volunteerArr.push(obj1);
  }
   clearAndShow();
   //  nameArr.push(nArr.value);
   //  phoneNumberArr.push(pArr.value);
   //  street.push(sArr.value);
}

function show(){
    var table = document.createElement('table');
    var row = document.createElement('tr');

    for(var prop in obj){
      var cell = document.createElement('th');
      cell.textContent = prop;
      row.appendChild(cell);
    }
    table.appendChild(row);

    for(var i=0; i<victimArr.length; i++){
      var row = document.createElement('tr');
        for(var prop in victimArr[i]){
          var cell = document.createElement('td');
          cell.textContent = victimArr[i][prop];
          row.appendChild(cell);
        }
      table.appendChild(row);
    }

    for(var i=0; i<volunteerArr.length; i++){
      var row = document.createElement('tr');
        for(var prop in volunteerArr[i]){
          var cell = document.createElement('td');
          cell.textContent = volunteerArr[i][prop];
          row.appendChild(cell);
        }
      table.appendChild(row);
    }
    var body = document.querySelectorAll('.divform')[0];
      body.appendChild(table);
    document.getElementsByTagName("table")[0].className = "table";
    // document.getElementByClass('.divform').appendChild(table);
    //console.log(table);
}
