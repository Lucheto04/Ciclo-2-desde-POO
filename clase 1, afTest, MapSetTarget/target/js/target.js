                                                            /*SIN Tarjet*/
/*const btn1 = document.querySelector(".bt1");
const btn2 = document.querySelector(".bt2");

let intContador = 0;

const txtContador = document.querySelector("#idContador"); 

btn1.addEventListener("click", () => {
    aumentarValor()
});
btn2.addEventListener("click", () => {
    disminuirValor()
});

const aumentarValor = function () {
    txtContador.textContent = ++intContador;
}
const disminuirValor = function () {
    txtContador.textContent = intContador;
}*/

                                                            /*Con Tarjet*/
let intContador = 0;
const txtContador = document.querySelector("#idContador"); 
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("bt1")) 
        txtContador.textContent = ++intContador
    else if (e.target.classList.contains("bt2"))
        txtContador.textContent = --intContador

    e.stopPropagation();
});

document.body.addEventListener("click", () => {
    console.log("Evento click del body");
})
/**/