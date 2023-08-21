document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;

let letra = document.querySelector("#letra").value;
let resultado = cuantasVeces(texto,letra);

 resultado;
}
function cuantasVeces(texto,letra) {
 


  let palabraNueva = "";
  let contador = 0;
  for (var i =0;  i <=texto.length; i++) {     

    if (texto.charAt(i).toLowerCase() != letra.toLowerCase()){
        palabraNueva = palabraNueva + texto.charAt(i)
    	
      }

    else{
    	palabraNueva = palabraNueva + "*"


    }
    document.querySelector("#pResultado").innerHTML = palabraNueva
  
  }
  }
