import  cargarTexto from "./cargarTexto.js";

const cargarTxt= document.querySelector("#cargarTxt");
const btnCargarTxt = document.querySelector("#btnTexto");

btnCargarTxt.addEventListener("click", (e) => {
    cargarTexto(cargarTxt);

    e.stopPropagation();
});

const btnCargarJSON = document.querySelector("#btnJson");
const tblBody = document.querySelector("#dataTable");

btnCargarJSON.addEventListener("click", (e) => {
    cargarJSON(tblBody);

    e.stopPropagation();
});

const cargarJSON = elemHTML => {
    fetch("datos.json")
    .then(response => response.json())
    .then(data => {
        console.table(data);
        buildTable(elemHTML, data);
    });
}

function buildTable(elemHTML, data) {
    let fila = "";
    for (let valor of data) {
        fila += /*html*/
        `
        <tr>
            <td>${valor.NOMBRE}</td>
            <td>${valor.EQUIPO}</td>
            <td id="tblEdad">${valor.EDAD}</td>
            <td id="tblImg">
                <img src=${valor.SEXO === "M" ? "hombre.png" : "mujer.png"} alt="Camper" >
            </td>
        </tr>
        `;
    }
    elemHTML.innerHTML = fila;
}




