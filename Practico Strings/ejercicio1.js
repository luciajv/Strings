document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {
  let texto = document.querySelector("#txtTexto").value;
  let textoInverso = invertirTexto(texto);
  document.querySelector("#pResultado").innerHTML = textoInverso;
}

function invertirTexto(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
  }
  return textoInvertido;
}
