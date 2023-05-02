/*
conocer si es par o impar
conocer si es positivo, negativo o cero
conocer si es primo
*/

class numeroInt {
    constructor(numero){
        this.numero = numero;
    }

    parImpar(){
        if(this.numero % 2 === 0)
            console.log("el numero es PAR!!")
        else 
            console.log("el número es IMPAR")
    }

    posNeg() {
        if (this.numero < 0)
            console.log("el numero es negativo");
        else if (this.numero > 0)
            console.log("el numero es positivo");
        else if (this.numero === 0)
            console.log("el numero ingresado es 0");
    }
    
    esPrimo() {
        for (let num = 2;num < this.numero; num++) {
            if (this.numero % num === 0) {
                console.log("el numero no es primo");
                return false
            }
            
        }
        console.log("el numero es primo");
        return true;
        
    }    
}

const numero1 = new numeroInt(4);
const numero2 = new numeroInt(3);
const numero3 = new numeroInt(0);




console.log(numero1.parImpar());
console.log(numero1.posNeg());
console.log(numero1.esPrimo());

console.log(numero2.parImpar());
console.log(numero2.posNeg());
console.log(numero2.esPrimo());

console.log(numero3.parImpar());
console.log(numero3.posNeg());
console.log(numero3.esPrimo());





