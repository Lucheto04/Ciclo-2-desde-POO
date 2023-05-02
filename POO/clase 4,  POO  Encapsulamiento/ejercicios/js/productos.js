class Producto {
    constructor(codigo, preCompra, cantBodega, cantMinBodega){
        this._codigo = codigo;
        this._preCompra = preCompra;
        this._cantBodega = cantBodega;
        this._cantMinBodega = cantMinBodega;
    }

    get codigo(){
        return this._codigo;
    }

    set preCompra(newPreCompra){
        this._preCompra = newPreCompra;
    }
    get preCompra(){
        return this._preCompra;
    }

    set cantBodega(newCantBodega){
        this._cantBodega = newCantBodega
    }
    get cantBodega(){
        return this._cantBodega;
    }
    set cantMinBodega(newCantMinBodega){
        this._cantMinBodega = newCantMinBodega;
    }
    get cantMinBodega(){
        return this._cantMinBodega;
    }

    solPedido () {
        if (this._cantBodega < this._cantMinBodega){
            return true
        } else {
            return false
        }
    }
}

let tarjetas = "";
let datos = Array();
let tarjeta = "";

const imprimir =  () => {
    codigo = document.querySelector("#codigo").value;
    precio = document.querySelector("#precio").value;
    cantidadB = document.querySelector("#cantidadB").value;
    cantMB = document.querySelector("#cantMB").value;
    const datosObject = new Producto(codigo, precio, cantidadB, cantMB);
    console.log(datosObject);
    datos.push([datosObject]);
    console.log(datos);

    if (datosObject.solPedido()) {
        tarjeta +=  /*HTML*/
        `
        <div class="card ms-3 mt-6 col-3">
            <div class="card-body bg-danger">
                <h2 class="card-header">Alerta!</h2>
                <h5>Codigo de producto: ${codigo}</h5>
                <h6 class="card-title">Realizar Pedido!!</6>
                <br><br>
                <p class="card-text">El producto seleccionado no tiene stock suficiente</p>
            </div>
        </div>
        `;
    } else {
        tarjeta += /*HTML*/
        `
        <div class="card ms-3 mt-6 col-3">
            <div class="card-body bg-success">
                <h2 class="card-header">Añadido</h2>
                <h5>Codigo de producto: ${codigo}</h5>
                <h6 class="card-title">Pedido realizado</h6>
                <p> El coste del producto es de: ${precio}</p>
                <p class="card-text">El producto seleccionado se añadio a la cola del pedido</p>
            </div>
        </div>
        `;
    }
    document.querySelector("#tarjetas").innerHTML = tarjeta;

     document.querySelector("#codigo").value ="";
     document.querySelector("#precio").value ="";
     document.querySelector("#cantidadB").value ="";
     document.querySelector("#cantMB").value ="";
}


