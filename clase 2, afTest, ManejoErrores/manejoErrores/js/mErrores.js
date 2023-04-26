/*
Maneja 3 tipos
Try
Catch
Finally
*/

/*try {
    //throw "Lanzando una excepcion";
    let str;
    str.length
} catch (ex) {
    console.log("capturando la excepcion. \n", ex);
}*/


const cudradoNumero = num => {
    if(isNaN(num))
        throw new Error (" No es un número la entrada")

    return num * num;
}

try {
    console.log(cudradoNumero("l3"));
}catch (error){
    console.log("Ha ocurrido una excepción \n", error);
}