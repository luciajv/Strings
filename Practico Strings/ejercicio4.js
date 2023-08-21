document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = convertir(texto);

}
function convertir(texto) {
  let textomin;
  textomin = texto.toLowerCase()
   
  document.querySelector("#pResultado").innerHTML = textomin
  
  }
  