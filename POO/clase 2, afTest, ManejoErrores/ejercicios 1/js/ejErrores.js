let base;
let altura;


function calcularArea (base, altura) {
    
    if (isNaN(base) || isNaN(altura))
        throw new Error ("la base o altura no son números validos")
    if (base < 0 || altura < 0)
        throw new Error ("La base o altura no pueden ser un numero negativo")

    document.getElementById("mostrar").textContent = base * altura / 2
    //return base * altura / 2;
}

/*
document.getElementById("calcular").addEventListener("click", () => {
    calcularArea();
} )
*/



try {
    base = document.getElementById("base");
    altura = document.getElementById("altura");

    area = calcularArea(base.value, altura.value);
    console.log("El area es ", area);
}catch (ex){
    console.log(ex.message);
    area = 0;
    console.log("Ha ocurrido un error \n", ex);
}
