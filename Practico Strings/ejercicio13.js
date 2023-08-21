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
  let textoConvertido;
  textoConvertido = texto.toLowerCase()

  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += textoConvertido.charAt(i);
  }
  console.log(textoInvertido) ;
}


 
