/**
 * Converteix l'input en un array
 *
 * @param {string}  El valor del camp input que li passam
 */
function fromStringToArray(text) {
  return text.split(",");
}

/**
 * str_ordena_major
 */
function str_ordena_major() {
  //passar a array l'string introduït
  let a = fromStringToArray(document.getElementById("input1").value);
  document.getElementById("results").innerHTML = a.sort();
}

function num_ordena_major() {
  //passar a array l'string introduït
  let a = fromStringToArray(document.getElementById("input1").value);
  //Convertir a Number cada element de l'array
  let a2 = a.map((x) => parseFloat(x));
  document.getElementById("results").innerHTML = a2.sort(function(a, b){return a - b});
}

function num_ordena_menor() {
  //passar a array l'string introduït
  let a = fromStringToArray(document.getElementById("input1").value);
  document.getElementById("results").innerHTML = a
    .map((x) => parseFloat(x))
    .sort(function(a, b){return a - b})
    .reverse();
}

/**
 *
 */
window.onload = function () {
  const buttonEventList = [
    "str_ordena_major",
    "num_ordena_major",
    "num_ordena_menor",
  ];

  buttonEventList.forEach((x) => {
    //Obtenir punter de la funció a partir del nom
    var functPtr = window[x];
    document.getElementById(x).addEventListener("click", functPtr);
  });
};
