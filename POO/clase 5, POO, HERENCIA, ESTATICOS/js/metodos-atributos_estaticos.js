class MiMath {
    static cuadrado(number) {
        return number * number;
    } 
}
MiMath.cuadrado(5)



class CuentaCorriente {
    //Estaticos

    static cantidad = 0

    constructor(numero, nombre, saldo = 0) {
        this._numero = numero
        this._nombre = nombre
        this._saldo = saldo
        ++CuentaCorriente.cantidad
    }

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

    static nombreBanco() {
        return "Campus Bank";
    }
}

const ctaCrrA = new CuentaCorriente(1234, "Juan");
const ctaCrrB = new CuentaCorriente(9876, "Maria", 450600);

console.log(CuentaCorriente.cantidad); //= 2
//console.log(ctaCrrA.cantidad); //= undefine dado que estamos tomando la instancia no la class, y cantidad solo pertenece a la class no existe en ninguna de las instancias.

console.log(CuentaCorriente.nombreBanco());