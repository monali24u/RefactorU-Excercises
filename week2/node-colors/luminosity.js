

function luminosity(){
  var result = (process.argv[2] * 0.2126) + (process.argv[3] * 0.7152) + (process.argv[4] * 0.0722);
  return result;
}

console.log(luminosity());
