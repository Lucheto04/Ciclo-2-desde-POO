/* Una libreria quiere calcular los dias que han pasado entre la fecha pactada de un libro y su entrega, para efectos de cobrar multa.

* Construye un formulario web que reciba la fecha de entrega pactada de un libro y la fecha de entrega real.
*/

let a = document.getElementById("fecha1").value;
let b = document.getElementById("fecha2").value;

function voyBien (a, b) {
    a = document.getElementById("fecha1").value;
    b = document.getElementById("fecha2").value;
    alert(a)
    alert(b)
};

let fEntrega;
let fPactada;
let diferencia; 
let minutosa;
let horas;
let dias;
const calcular = function () {
    fEntrega =  new Date(a)
    fPactada = new Date(b);
    diferencia = fEntrega.getTime() - fPactada.getTime();
    minutos = Math.round(diferencia / 1000 / 60);
    horas = Math.round(minutos / 60);
    dias = Math.round(horas / 24);
};