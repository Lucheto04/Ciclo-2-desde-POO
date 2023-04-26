// ahora 
const ahora = new Date();

console.log(ahora);


const randomDate = new Date(2015,3,12,3,25,58)
console.log(randomDate);

const win95 = new Date(1995,7,27);
console.log(win95);



//Asignando valores

ahora.setFullYear(2001);// asigna el año
ahora.setMonth(4);// asigna Abril
ahora.setDate(7); // asigna el dia
console.log(ahora);

console.log(ahora.getFullYear());
console.log(ahora.getTime());// cantidad de milisegundos
console.log(ahora.getDay()); // Dia de la semana
console.log(ahora.getDate());
console.log(ahora.getHours());
console.log(ahora.getMinutes());
console.log(ahora.getSeconds());


console.log(ahora.toDateString()); // conviere el dato del metodo DATE() a str, para lograr manipularlo, solicitando que modifique solo la fecha y no la hora
console.log(ahora.toTimeString()); // conviere el dato del metodo DATE() a str, para lograr manipularlo, solicitando que modifique solo la hora y no la fecha

console.log(ahora.toLocaleString());// nos muestra el dato en otro formato mas simple


/*Ejercicio guiado*/





