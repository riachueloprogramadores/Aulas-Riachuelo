/*//Final da aula 16 - Laços Internos

var totalConta = [
    [22,22,20,24],
    [24,22,20]
]

function somaArr(arr) {
    var totalGasto = 0;
    for (var contador=0; contador < arr.length; contador++) {
        totalGasto += arr[contador];
    }
    return totalGasto;
}

for(var contador=0; contador < totalConta.length; contador++) {
    document.write(`Gasto na semana ${contador} : ${somaArr(totalConta[contador])}`);
    document.write("<br>");
}

//Validação de dados
var entradaUsuario = prompt("Escolha 1 para ônibus e 2 para metrô");
while (true) {
    if(entradaUsuario == 2 || entradaUsuario == 1) {
        break;
    } else {
        alert("Entrada Invalida!");
        entradaUsuario = prompt("Escolha 1 para ônibus e 2 para metrô");
    }
}*/

//Interatividade com html e js
//Click
//No arquivo html


