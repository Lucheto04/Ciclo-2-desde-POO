//Crear un conjunto Ej1
const cLetras = new Set (["a", "b", "c", "d"]);
console.log(cLetras);

//Crear un conjunto Ej2
const cLetras2 = new Set ();
cLetras2.add('a');
cLetras2.add('b');
cLetras2.add('c');
cLetras2.add('d');
console.log(cLetras2);

//Eliminar elementos de un conjunto:
cLetras.delete('c');
console.log(cLetras);

//Verificar si un elemento existe o no en el conjunto
console.log(cLetras.has("c"));//Devuelve verdadero o falso despues de validar si el elemento existe o no.

// Mostrar la cantidad de elementos de un conjunto

console.log(cLetras.size);//evidenciamos la cantidad de los elementos, outpot=3

// Iterar el conjunto con forEach()
let str = "";
cLetras.forEach(letra => {
    str += letra + ",";
});
console.log(str); //Separamos todos los valores de cLetras con ",", recuerda que forEach() toma una funcion

// Iterar el conjunto con Values()
console.log(cLetras.values());//Devuelve un iterador, es decir que va a recorrer el elemento y me muestra los valores del mismo
let str1 = "";
for (let letra of cLetras){
    str1 += letra + "*";
};
console.log(str1);