/*
//OBJETO (Instancia solo se toma cuando se crea una clase)->
const CuentaCorriente = {
    //atributo ->
    numero:1234,
    nombre:"Juan",
    saldo:350_000,
    //metodos ->
    depositar(monto){
        this.saldo += monto;
        return true;
    },
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto
        else 
            return false;
        
        return true;
    },
    consultarSaldo() {
        return this.saldo;
    }
}

console.log(CuentaCorriente.consultarSaldo());
CuentaCorriente.depositar(350_000);
CuentaCorriente.girar(200_000);
console.log(CuentaCorriente.consultarSaldo());

//OBJETO (O INSTANCIA)->
const CuentaCorrienteB = {
    //atributo ->
    numero:9876,
    nombre:"Maria",
    saldo:450_600,
    //metodos ->
    depositar(monto){
        this.saldo += monto;
        return true;
    },
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto
        else 
            return false;
        
        return true;
    },
    consultarSaldo() {
        return this.saldo;
    }
}
console.log(CuentaCorrienteB.consultarSaldo());
CuentaCorrienteB.depositar(3_050_000);
CuentaCorrienteB.girar(0);
console.log(CuentaCorrienteB.consultarSaldo());
*/

// Con CLASES
//clase
class CuentaCorriente {
    //atributos
    constructor(numero, nombre, saldo){
        this.numero = numero;
        this.nombre = nombre;
        this.saldo/*Hace referencia al atributo de la class(CuentaCorriente)*/ = saldo; //hace referencia a los parametros del metodo Constructor
    }
    //metodos
    depositar(monto){
        this.saldo += monto;
        
        return true;
    }
    girar(monto) {
        if (this.saldo >= monto)
            this.saldo -= monto
        else 
            return false;
        
        return true;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
//instancias
const ctaCorrienteA = new CuentaCorriente(1234, "Juan", 350_000);// new para crear los objetos
const ctaCorrienteB = new CuentaCorriente(9876, "Maria", 450_600);

console.log(ctaCorrienteA.consultarSaldo());
ctaCorrienteA.depositar(350_000);
ctaCorrienteA.girar(200_000);
console.log(ctaCorrienteA.consultarSaldo());

console.log("-".repeat(30));

console.log(ctaCorrienteB.consultarSaldo());
ctaCorrienteB.depositar(3_050_000);
ctaCorrienteB.girar(0);
console.log(ctaCorrienteB.consultarSaldo());
