class CuentaCorriente {
    constructor(numero, nombre, saldo = 0){
        this._numero = numero;
        this._nombre = nombre;
        this._saldo = saldo;
    }
    set numero(nuevoNumero) {
        this._numero = nuevoNumero;
    }
    get numero() {
        return this._numero;
    }
    set nombre(nuevoNombre) {
        console.log("Set nombre");
        this._nombre = nuevoNombre;
    }
    get nombre() {
        console.log("Get nombre");
        return this._nombre;
    }
    set saldo(nuevoSaldo) {
        this._saldo = nuevoSaldo;
    }
    get saldo() {
        console.log("GET saldo");
        return this._saldo;
    }
    depositar(monto){
        this._saldo += monto;
        return true;
    }
    girar(monto) {
        if (this._saldo >= monto)
            this._saldo -= monto
        else 
            return false;
        
        return true;
    }
    consultarSaldo() {
        return this._saldo;
    }
}
const ctA = new CuentaCorriente(1234, "Juan", 350_000)
ctA.depositar(100_000)
console.log(ctA.consultarSaldo());

ctA.nombre = "Oscar";
console.log("Nombre: ", ctA.nombre);