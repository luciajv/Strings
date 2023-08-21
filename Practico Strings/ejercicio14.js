document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = cuantasVeces(texto);
document.querySelector("#pResultado").innerHTML = resultado

}
function cuantasVeces(texto) {
  let contador = 0;
  let letra;
  letra = texto.charAt(0)
  for (var i =0;  i <=texto.length; i++) {
    if (letra.toLowerCase() == texto.charAt(i).toLowerCase())
          contador++     
    }

    return contador
}

 
