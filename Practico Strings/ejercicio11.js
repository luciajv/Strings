document.querySelector("#btnCalcular").addEventListener("click", ver);

function ver() {

let texto = document.querySelector("#texto").value;
let resultado = cuantasVeces(texto);

 resultado;
}
function cuantasVeces(texto) {
 


  let palabraNueva = "";
  for (var i =0;  i <=texto.length; i++) {     

    if (i == 0 ){
        palabraNueva = palabraNueva + texto.charAt(i).toUpperCase();
    	
      }

    else{
    	palabraNueva = palabraNueva + texto.charAt(i).toLowerCase();


    }
    document.querySelector("#pResultado").innerHTML = palabraNueva
  
  }
  }
