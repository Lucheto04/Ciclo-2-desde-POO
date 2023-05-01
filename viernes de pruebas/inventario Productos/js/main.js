const taPrendas = document.querySelector(".taPrendas");
const taPrendas1 = document.querySelector("#taPrendas");
const taCalzado = document.querySelector(".taCalzado");
const taCalzado1 = document.querySelector("#taCalzado");
const llenarDatos = document.querySelector(".llenarDatos");
const infoEscondida = () => {
    taPrendas.style.display = "none";
    taPrendas1.style.display = "none";
    taCalzado.style.display = "none";
    taCalzado1.style.display = "none";
    llenarDatos.style.display = "none";

    let checkPrendas = document.querySelector("#prVestir");
    checkPrendas.addEventListener("change", elegirTipoR);

    let checkCalzado = document.querySelector("#calzado");
    checkCalzado.addEventListener("change", elegirTipoR);
}
const elegirTipoR = () => {
    let checkPrendas = document.querySelector("#prVestir");
    let checkCalzado = document.querySelector("#calzado");
    if (checkPrendas.checked) {
        llenarDatos.style.display = "block";
        taPrendas.style.display = "block";
        taPrendas1.style.display = "block";
        taCalzado.style.display = "none";
        taCalzado1.style.display = "none";
    } else if (checkCalzado.checked) {
        llenarDatos.style.display = "block";
        taCalzado.style.display = "block";
        taCalzado1.style.display = "block";
        taPrendas.style.display = "none";
        taPrendas1.style.display = "none";
    }
}

class Producto {
    #codigo
    #descripcion
    #preCompra
    #preVenta
    #cantBod
    #cantMnBod
    #cantMxInv
    #descuento
    constructor(codigo, descripcion, preCompra, preVenta, cantBod, cantMnBod, cantMxInv, descuento){
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#preCompra = preCompra;
        this.#preVenta = preVenta;
        this.#cantBod = cantBod;
        this.#cantMnBod = cantMnBod;
        this.#cantMxInv = cantMxInv;
        this.#descuento = descuento
    }

    get codigo(){
        return this.#codigo;
    }

    set descripcion(newDescripcion){
        this.#descripcion = newDescripcion;
    }

    get descripcion() {
        return this.#descripcion
    }


    set preCompra(newPreCompra){
        this.#preCompra = newPreCompra;
    }
    get preCompra(){
        return this.#preCompra;
    }

    set preVenta(newPreVenta){
        this.#preVenta = newPreVenta;
    }
    get preVenta(){
        return this.#preVenta;
    }

    set cantBod(newCantBod){
        this.#cantBod = newCantBod
    }
    get cantBod(){
        return this.#cantBod;
    }

    set cantMnBod(newCantMnBod){
        this.#cantMnBod = newCantMnBod;
    }
    get cantMnBod(){
        return this.#cantMnBod;
    }

    set cantMxInv(newCantMxInv){
        this.#cantMxInv = newCantMxInv;
    }
    get cantMxInv(){
        return this.#cantMxInv;
    }

    set descuento(newDescuento) {
        this.#descuento = newDescuento;
    }

    get descuento(){
        return this.#descuento
    }

    mostrar() {
        codigo = document.querySelector("#codigo").value;
        descripcion = document.querySelector("#descripcion").value;
        preCompra = document.querySelector("#preCompra").value;
        preVenta = document.querySelector("#preVenta").value;
        cantBod = document.querySelector("#cantBod").value;
        cantMnBod = document.querySelector("#cantMnBod").value;
        preCompra = document.querySelector("#preCompra").value;
        preVenta = document.querySelector("#preVenta").value;
        descuento = document.querySelector("#descuento").value;
        talla = document.querySelector("#taPrendas").value;
        if (this.#cantBod < 5){
            tarjeta += /*HTML*/
            `
            <div class="card ms-3 mt-6 col-2" style="background-color: rgba(198, 175, 175, 0.7);">
                <div class="card-body">
                    <h4 class="text-center">Solicitar Pedido</h3>
                    <p>${codigo}</p>
                    <p>${descripcion}</p>
                    <p>${preCompra}</p>
                    <p>${preVenta}</p>
                    <p>${cantBodega}</p>
                    <p>${Descuento}</p>
                    <p>${talla}</p>
                    <p>No hay suficiente stock del producto!!</p>
                </div>
            </div>
            `
            return true
        } else {
            return false
        }
    }
}


class PrendasVestir extends Producto {
    #talla
    constructor(codigo, descripcion, preCompra, preVenta, cantBod, cantMnBod, cantMxInv, descuento, talla) {
        super(codigo, descripcion, preCompra, preVenta, cantBod, cantMnBod, cantMxInv, descuento);
        this.#talla = talla;
    }

    set talla(newTalla){
        this.#talla = newTalla
    }

    get talla(){
        return this.#talla
    }
}

/*
let tarjeta = "";
let infoMostrar = Array();
const imprimir =  () => {
    codigo = document.querySelector("#codigo").value;
    descripcion = document.querySelector("#descripcion").value;
    preCompra = document.querySelector("#preCompra").value;
    preVenta = document.querySelector("#preVenta").value;
    cantBod = document.querySelector("#cantBod").value;
    cantMnBod = document.querySelector("#cantMnBod").value;
    preCompra = document.querySelector("#preCompra").value;
    preVenta = document.querySelector("#preVenta").value;
    descuento = document.querySelector("#descuento").value;
    talla = document.querySelector("#taPrendas").value;
    if (cantBod < 5){
        tarjeta += /*HTML*//* <<<<<<<<<<<<<<------------------------------------------------
        `
        <div class="card ms-3 mt-6 col-2" style="background-color: rgba(198, 175, 175, 0.7);">
            <div class="card-body">
                <h4 class="text-center">Solicitar Pedido</h3>
                <p>${codigo}</p>
                <p>${descripcion}</p>
                <p>${preCompra}</p>
                <p>${preVenta}</p>
                <p>${cantBodega}</p>
                <p>${Descuento}</p>
                <p>${talla}</p>
                <p>No hay suficiente stock del producto!!</p>
            </div>
        </div>
        `
    } else {
        return false
    }
    document.querySelector("#tarjetas").innerHTML = tarjeta;
}
---------------------------------------------->>>>>>>>>>*/