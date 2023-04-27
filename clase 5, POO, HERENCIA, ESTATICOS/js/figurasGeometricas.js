class Figura {
    #color; // Atributo Privado de la class figura
    constructor (color){
        this.#color = color;
    }

    // setter and getter

    set color (newColor) {
        this.#color = newColor;
    }
    get color () {
        return this.#color;
    }

    // METODOS

    calcularArea(){}
    clacularPerimetro(){}// Metodos Abstractos
}

class Cuadrado extends Figura {
    #lado;
    constructor(color, lado) {
        super(color);//accedemos a la herencia y la pasamos
        this.#lado = lado;
    };

    set lado(newLado) {
        this.#lado = newLado;
    }
    get lado() {
        return this.#lado;
    }
    calcularArea() {
        return this.#lado * this.#lado; //calculamos el area mutiplicando lado * lado
    };
    clacularPerimetro() {
        return 4 * this.#lado; // El perimetro se calcula sumando sus lados, que es lo mismo que multiplicar los lados * 4
    }

}

class Rectangulo extends Figura {
    #base;
    #altura;
    constructor(color, base, altura) {
        super(color);//accedemos a la herencia y la pasamos
        this.#base = base;
        this.#altura = altura;
    };

    set base(newbase) {
        this.#base = newbase;
    }
    get base() {
        return this.#base;
    }
    set altura(newAltura) {
        this.#altura = newAltura;

    }
    get altura() {
        return this.#altura;
    }
    calcularArea() {
        return this.#base * this.#altura; 
    }
    clacularPerimetro() {
        return 2 * (this.#base + this.#altura);
    }
}

class Circulo extends Figura {
    #radio;
    constructor(color, radio) {
        super(color);//accedemos a la herencia y la pasamos
        this.#radio = radio;
    };

    set radio(newRadio) {
        this.#radio = newRadio;
    }
    get radio() {
        return this.#radio;
    }
    calcularArea() {
        return Math.PI * this.#radio* this.#radio;
    }
    clacularPerimetro() {
        return 2 * Math.PI * this.#radio;
    }
}

class Canva {
    #background;
    #alto;
    #ancho;
    #figuras;
    constructor(/*SIN Parametros*/){
        this.#background = "white";
        this.#alto = 800;
        this.#ancho = 600;
        this.#figuras = Array();
    };

    set  figura(newFigura) {
        this.#figuras = newFigura;
    }
    get figura() {
        return this.#figuras
    }

    agregarFiguras (figura) {
        this.#figuras.push(figura);
    };
}

let c1 = new Canva ();
console.log("Figuras: ", c1.figura);

let cuad1 = new Cuadrado("yellow", 3);
c1.agregarFiguras(cuad1);
console.log("Figuras: ", c1.figura);
console.log("Area cuadrado", c1.figura[0].calcularArea());

let cir1 = new Circulo("red", 10);
c1.agregarFiguras(cir1);
console.log("Figuras: ", c1.figura);

for (let  fig of c1.figura) {
    console.log("Area de ", fig, "es: ", fig.calcularArea());
}
