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

    mostrar (){};
}
let tarjeta = "";
let infoMostrar = Array();

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

    mostrar() {
        codigo = document.querySelector("#codigo").value;
        descripcion = document.querySelector("#descripcion").value;
        preCompra = document.querySelector("#preCompra").value;
        preVenta = document.querySelector("#preVenta").value;
        cantBod = document.querySelector("#cantBod").value;
        cantMnBod = document.querySelector("#cantMnBod").value;
        preCompra = document.querySelector("#preCompra").value;
        preCompra = document.querySelector("#preCompra").value;
        if (this.#cantBod < 5){
            return true
        } else {
            return false
        }
    }
}