document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;


let resultado = contarPalabras(texto);

}
function contarPalabras(texto) {
  
  palabra = texto.length -1
  if (texto.charAt(0).toLowerCase() == texto.charAt(palabra).toLowerCase()) {
    return document.querySelector("#pResultado").innerHTML = "La palabra empieza y termina con la misma letra"
    
   }
  else {
    return document.querySelector("#pResultado").innerHTML = "La palabra no empieza y termina con la misma letra"
  }

 }
   
  
  

  