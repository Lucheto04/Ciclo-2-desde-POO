/*Traemos la informacion del primer modulo
import {PI, suma} from "./import_Export1.js";
let salbas = 2800000;
console.log(suma(2, 1));
console.log(PI);*/
let salbas = 2800000;

//Para importar TODOS los archivos del modulo se realiza de la siguiente manera:

import nombre, * as ejer_1 from "./import_Export1.js";
//import { factorial, PI as PII} from "./import_Export1,3.js";
import * as erg from "./import_Export1,3.js";
import {mensaje} from "./import_Export1,4.js";
console.log(ejer_1.suma(2, 1));
console.log(ejer_1.PI);
console.log(salbas * ejer_1.PORCEPS);
console.log(erg.PI);
console.log(mensaje());
console.log(ejer_1.sputnik.promEdad);
console.log(ejer_1.Camper.mensaje());
//manera de exportar el valor que se encuentra por defecto en el modulo. Solo hay 1 default por modulo.
console.log(nombre);

