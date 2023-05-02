const taPrendas = document.querySelector(".taPrendas");
const taPrendas1 = document.querySelector("#taPrendas");
const taCalzado = document.querySelector(".taCalzado");
const taCalzado1 = document.querySelector("#taCalzado");
const planchado = document.querySelector(".planchado");
const planchado1 = document.querySelector("#planchado");
const llenarDatos = document.querySelector(".llenarDatos");
const infoEscondida = () => {
    taPrendas.style.display = "none";
    taPrendas1.style.display = "none";
    taCalzado.style.display = "none";
    taCalzado1.style.display = "none";
    planchado.style.display = "none";
    planchado1.style.display = "none";
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
        planchado.style.display = "block";
        planchado1.style.display = "block";
    } else if (checkCalzado.checked) {
        llenarDatos.style.display = "block";
        taCalzado.style.display = "block";
        taCalzado1.style.display = "block";
        taPrendas.style.display = "none";
        taPrendas1.style.display = "none";
        planchado.style.display = "none";
        planchado1.style.display = "none";
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

    solPedido () {
        if (this.#cantBod < this.#cantMnBod)
            return true;
        else
            return false;
    }

    totalPagar () {

    }

    mostrar () {}
}

class PrendasVestir extends Producto {
    #talla
    #planchado
    constructor(codigo, descripcion, preCompra, preVenta, cantBod, cantMnBod, cantMxInv, descuento, talla, planchado) {
        super(codigo, descripcion, preCompra, preVenta, cantBod, cantMnBod, cantMxInv, descuento);
        this.#talla = talla;
        this.#planchado = planchado;
    }

    set talla(newTalla){
        this.#talla = newTalla
    }

    get talla(){
        return this.#talla
    }

    set planchado(newPlanchado) {
        this.#planchado = newPlanchado;
    }
    get planchado(){
        return this.#planchado
    }
}
class Calzado extends Producto {
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

let tarjetas = "";
let datos = Array();
const imprimir = function () {
    let codigo = document.querySelector("#codigo").value;
    let descripcion = document.querySelector("#descripcion").value;
    let preCompra = document.querySelector("#preCompra").value;
    let preVenta = document.querySelector("#preVenta").value;
    let cantBodega = document.querySelector("#cantBodega").value;
    let cantMnBod = document.querySelector("#cantMnBodega").value;
    let cantMxInv = document.querySelector("#cantMxInv").value;
    let descuento = document.querySelector("#descuento").value;
    let taPrendas = document.querySelector("#taPrendas").value;
    let planchado = document.querySelector("#planchado").value;
    let checkPrendas = document.querySelector("#prVestir");
    let checkCalzado = document.querySelector("#calzado");
    if (checkPrendas.checked) {
        const objetos = new PrendasVestir(codigo, descripcion,preCompra, preVenta, cantBodega, cantMnBod, cantMxInv, descuento, taPrendas, planchado);
        datos.push(objetos);
        console.log(datos);
        let porcDescuento = descuento / 100;
        let op1 = (cantMxInv - cantBodega) * preCompra;
        let totalPagar = op1 - (op1 * porcDescuento);
        if (objetos.solPedido()) {
            tarjetas += /*html*/
            `
            <div class="card ms-3 mt-6 col-2" style="background-color: gray;">
                <div class="card-body">
                    <h4 class="text-center">Solicitar pedido!!!!</h3>
                    <p>Tipo: Prendas de Vestir</p>
                    <p>Codigo: ${codigo}</p>
                    <p>Descripcion: ${descripcion}</p>
                    <p>preCompra: ${preCompra}</p>
                    <p>cantBodega: ${cantBodega}</p>
                    <p>Descuento: ${descuento}%</p>
                    <p>pagar al proveedor: ${totalPagar}</p>
                </div>
            </div>
            `
        } else {
            tarjetas += /*html*/
            `
            <div class="card ms-3 mt-6 col-2" style="border: 1px solid black;">
                <div class="card-body">
                    <h4 class="text-center">Añadido al carrito</h3>
                    <p>Tipo: Prendas de Vestir</p>
                    <p>Codigo: ${codigo}</p>
                    <p>Descripcion: ${descripcion}</p>
                    <p>precio compra: ${preCompra}</p>
                    <p>precio venta: ${preVenta}</p>
                    <p>Planchado: ${planchado}</p>
                    <p>Coste: ${preVenta}</p>
                </div>
            </div>
            `;
        }
        document.querySelector("#tarjetas").innerHTML = tarjetas;

        codigo = document.querySelector("#codigo").value = "";
        descripcion = document.querySelector("#descripcion").value = "";
        preCompra = document.querySelector("#preCompra").value = "";
        preVenta = document.querySelector("#preVenta").value = "";
        cantBodega = document.querySelector("#cantBodega").value = "";
        cantMnBod = document.querySelector("#cantMnBodega").value = "";
        cantMxInv = document.querySelector("#cantMxInv").value = "";
        descuento = document.querySelector("#descuento").value = "";
        taPrendas = document.querySelector("#taPrendas").value = "";
        planchado = document.querySelector("#planchado").value = "";
    }
}
    let boton = document.querySelector("#boton");
    boton.addEventListener("click", imprimir);
