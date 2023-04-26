const btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregarEmpleadoNomina);

/*
mapEmpleado = {
    cedula = {
        nombre : xxx
        categoria: xxx
        abrcategoria: xxx
    }
vEmpleados = [{emp1}, {emp2}, {emp3}]
}
*/

const vEmpleado = Array();
const mapTotalNomina = new Map();
const mapEstadisticas = new Map();
const salMinimo = 1_160_000;

function agregarEmpleadoNomina(e) {
    if (capturarInformacion() === false){

    }
}

const capturarInformacion = function () {
    const mapEmpleado = new Map();

    const cedula = document.querySelector("#cedula");

    if (cedula.length <= 0){
        alert("Valor incorrecto en la cédula");
        cedula.focus();
        return false;
    };
    const nombre = document.querySelector("#nombre");
    const ctrlcategoria = document.querySelector("#categoria");
    const categoria = ctrlcategoria.options[ctrlcategoria.selectedIndex].text;
    const abrCategoria = ctrlcategoria.value;


    const datEmpl = new Map([
        ["nombre", nombre],
        ["categoria", categoria],
        ["abrcategoria", abrCategoria]
    ]);

    mapEmpleado.set(cedula, datEmpl);
    vEmpleado.push(mapEmpleado);
    console.log(vEmpleado);
    return true;
        
}
