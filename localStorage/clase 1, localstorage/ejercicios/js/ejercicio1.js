let nombre = "";
let apellido = "";
function guardarInfo () {
    localStorage.setItem("Nombre", document.querySelector("#nombre").value);
    localStorage.setItem("Apellido", document.querySelector("#apellido").value);
    console.log(localStorage);
    nombre += localStorage.Nombre;
    apellido += localStorage.Apellido;
    console.log(nombre + " " + apellido);
    
}
document.querySelector("#guardar").addEventListener("click", guardarInfo);

const cargarInfo = () => {
    document.querySelector("#nAlmacenado").value = nombre;
    document.querySelector("#apAlmacenado").value = apellido;
}
document.querySelector("#cargar").addEventListener("click", cargarInfo);