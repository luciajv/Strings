document.querySelector("#btnCalcular").addEventListener("click", departamentos);


function departamentos() {
let texto = document.querySelector("#texto").value;
matri = texto.charAt(0).toUpperCase()
switch (matri) {
    case "A":
        resultado = "Canelones";
        break;
    
        case "B":
        resultado = "Maldonado";
            break;

        case "C":
        resultado = "Rocha";
            break;

        case "D":
        resultado = "Treinta y Tres";
            break;
        case "E":
        resultado = "Cerro Largo";
            break;
        case "F":
        resultado = "Rivera";
            break;
        case "G":
        resultado = "Artigas";
            break;
        case "H":
       	resultado = "Salto";
            break;
    
        case "I":
        resultado = "Paysandu";
            break;

        case "J":
        resultado = "Rio Negro";
            break;

        case "K":
       	resultado = "Soriano";
            break;
        case "L":
        resultado = "Colonia";
            break;
        case "M":
        rresultado = "San Jose";
            break;
        case "N":
        resultado = "Flores";
            break;
        case "O":
        resultado = "Florida";
            break;

        case "P":
        resultado = "Lavalleja";
            break;
        case "Q":
        resultado = "Durazno";
            break;
        case "R":
        resultado = "Tacuarembo";
            break;
        case "S":
        resultado = "Montevideo";
            break;

        }
 document.querySelector("#pResultado").innerHTML = "El vehiculo pertenece al departamento de " + resultado;
}
