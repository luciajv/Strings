document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = cuantasVeces(texto);
 resultado;
}
function cuantasVeces(texto) {
 
  let contador = 0;
  for (var i =0;  i <=texto.length; i++) {    
   
    if (texto.charAt(i).toLowerCase() == "a" || texto.charAt(i).toLowerCase() == "e" || texto.charAt(i).toLowerCase() == "i" || texto.charAt(i).toLowerCase() == "o" || texto.charAt(i).toLowerCase() == "u" )
          contador++
      }
    document.querySelector("#pResultado").innerHTML = "Hay " + contador + " vocales "
  
  }
  