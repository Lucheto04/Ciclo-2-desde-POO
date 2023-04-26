let codigo = document.querySelector("#codigo").value;
let nombre = document.querySelector("#nombre").value;
let estrato = document.querySelector("#estrato").value;
let consumo = document.querySelector("#consumo").value;
let valConsumo;
let valorPagar;
let Total;

const mostrar = function (c, n, e, cs) {
    codigo = document.querySelector("#codigo").value;
    nombre = document.querySelector("#nombre").value;
    estrato = document.querySelector("#estrato").value;
    consumo = document.querySelector("#consumo").value;
    valConsumo = consumo * 100;
    
    if (estrato == 1)
        tarBasica = 10_000;
    else if (estrato == 2)
        tarBasica = 15_000;
    else if (estrato == 3)
        tarBasica = 20_000;
    else if (estrato == 4)
        tarBasica = 25_000;
    else if (estrato == 5)
        tarBasica = 30_000;
    valorPagar = valConsumo + tarBasica

    tabla = 
    `
    <tr>
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${valorPagar}</td>
    </tr>
    `
    document.querySelector("#mostrar").innerHTML = tabla;

    document.querySelector("#codigo").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#estrato").value = "";
    document.querySelector("#consumo").value = "";
}

const btnMostrar = document.querySelector(".btn");
btnMostrar.addEventListener("click", mostrar);
