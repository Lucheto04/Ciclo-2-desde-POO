class MiMath {
    static cuadrado(number) {
        return number * number;
    }
}
MiMath.cuadrado(5);

class Cuenta {
    static cantidad = 0;

    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;

        ++Cuenta.cantidad;
    }

    set numero(nuevoNumero) {
        this._numero = nuevoNumero;
    }
    get numero() {
        return this._numero;
    }
    set saldo(nuevoSaldo) {
        this._saldo = nuevoSaldo;
    }
    get saldo() {
        console.log("GET saldo");
        return this._saldo;
    }
    depositar(monto) {
        this._saldo += monto;
        return true;
    }
    girar(monto) {
        if (this._saldo >= monto) this._saldo -= monto;
        else return false;

        return true;
    }
    consultarSaldo() {
        return this._saldo;
    }

    static nombreBanco() {
        return "Campus Bank";
    }
}

class CuentaAhorros extends Cuenta {
    //se mantiene en blanco por que en este caso no tiene instancias distintas a las de su padre
}

class CuentaCorriente extends Cuenta {
    static cantidad = 0;
    constructor(numero, nombre, saldo = 0, topeCredito) {
        super(numero, nombre, saldo);

        this._topeCredito = topeCredito;
        if (this._topeCredito === undefined) {
            this._topeCredito = 0;
        }
        ++CuentaCorriente.cantidad;
    }
    // SETTER - GETTER

    set topeCredito(nuevoTope) {
        this._topeCredito = nuevoTope;
    }
    get topeCredito() {
        return this._topeCredito;
    }

    // METODO DE LA CLASS (sobreescribimos el metodo girar, de la class padre)

    girar(monto) {
        if (this._saldo - monto >= -this._topeCredito) {
            this._saldo -= monto;
        }
        return false;
    }
}

/*
let ctAh1 = new CuentaAhorros(789, "Mariana", 50000);
let ctCr1 = new CuentaCorriente(753, "Daniela", 2_000_000, 5_000_000);
ctAh1.depositar(1_200_000);
ctCr1.girar(2_500_000);
ctCr1.depositar(500_000);
ctCr1.girar(7_000_000);
console.log("******Cuenta Corriente*******");
console.log("Saldo: ", ctCr1.consultarSaldo());
console.log("******Cuenta Ahorros*******");
console.log(ctAh1.consultarSaldo());
console.log(Cuenta.cantidad);
console.log(CuentaAhorros.cantidad);
console.log("******Cantidad Cuentas*******");
console.log("Cuentas creadas: ", CuentaCorriente.cantidad);
*/
class Persona {
    static cantPersona;
    /*}
    #nombre;
    #sexo;
        this.#nombre = nombre;//Atributos privados con ###nombre
        this.#sexo = sexo;
        set sexo(newSexo) {
        this.#sexo = newSexo;
        }
        get sexo(){
            return this.#sexo;
        }
        let p1 = new Persona("valerye", "F");
        console.log(p1);
        p1.nombre = "Valerie"
        console.log(p1);
    */
    constructor(tipoPersona, tipoDNI, numDNI, nombre, telefono, cuenta) {
        this._tipopersona = tipoPersona;
        this._tipoDNI = tipoDNI;
        this._numDNI = numDNI;
        this._nombre = nombre;
        this._telefono = telefono;

        this._cuenta = cuenta;
    }
    set nombre(newNombre) {
        this._nombre = newNombre;
    }
    get nombre() {
        return this._nombre;
    }

    set cuenta(newCuenta){
        this._cuenta = newCuenta
    }
    get cuenta() {
        return this._cuenta;
    }
}
let ctaC = new CuentaCorriente(753, 2_000_000, 2_000_000);

let p1 = new Persona("Natural", "C.c", 1234, "Daniela", 123456, ctaC);
p1.cuenta.girar(2_500_000);
p1.cuenta.depositar(500_000);
p1.cuenta.girar(7_000_000);
console.log(p1.cuenta.consultarSaldo());




