
function numero_signe() {
  //capturar contingut de camp "input1"

  input1 = document.getElementById("input1").value;
  
console.log("El numero introduit es " + input1 )

  if (input1 > 0) {
    document.getElementById("results").innerHTML = "POSITIU"
  } else {
    if (input1 < 0) {
      document.getElementById("results").innerHTML = "NEGATIU"
    } else {
      document.getElementById("results").innerHTML = "ES ZERO"
    }
  }
}
