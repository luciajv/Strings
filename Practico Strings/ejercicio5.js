document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = convertir(texto);

}
function convertir(texto) {
  let textomayus;
  textomayus = texto.toUpperCase()
   
  document.querySelector("#pResultado").innerHTML = textomayus
  
  }
  