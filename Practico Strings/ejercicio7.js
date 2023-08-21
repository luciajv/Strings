document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;


let resultado = contarPalabras(texto);

}
function contarPalabras(texto) {
  let contador = 0;
  for (let i = 0; i <= texto.length; i++) {
   if (texto.charAt(i).toLowerCase() == " ") {
    contador++;
   } 
 }
   contadorTotal = contador +1
   return document.querySelector("#pResultado").innerHTML = "Hay " + String(contadorTotal) +  " palabras"
  
}
  