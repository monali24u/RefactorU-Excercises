
function insert(){
  document.getElementById("Name").readOnly = true;
  document.getElementById("PhoneNumber").readOnly = true;
  document.getElementById("Address").readOnly = true;
}


function edit(){
  document.getElementById("Name").readOnly = false;
  document.getElementById("PhoneNumber").readOnly = false;
  document.getElementById("Address").readOnly = false;

}
