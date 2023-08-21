document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = cuantasVeces(texto);

 resultado;
}
function cuantasVeces(texto) {
  let contadorMayus =0;
  let contadorMin =0;

  let palabraNueva = "";
  for (var i =0;  i <=texto.length; i++) {     


      
    if (texto.charAt(i) != " " ){
        palabraNueva = palabraNueva + texto.charAt(i);
    	
      }

    document.querySelector("#pResultado").innerHTML = palabraNueva
  
  }
  }
