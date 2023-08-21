document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let palabra = document.querySelector("#palabra").value;

let resultado = convertir(texto, palabra);

}
function convertir(texto, palabra) {
  if (texto.toLowerCase().includes(palabra.toLowerCase())) {
    return document.querySelector("#pResultado").innerHTML = palabra.toLowerCase() + " esta adentro de " + texto.toLowerCase()
  }
  else{
     return document.querySelector("#pResultado").innerHTML = palabra.toLowerCase() + " no esta adentro de " + texto.toLowerCase()

  }
  
   
  
}
  