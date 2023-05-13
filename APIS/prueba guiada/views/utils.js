export function llenarFormulario(formu, data) {
    
    if (data !== undefined) {
        console.table(data);
        for(let key in data) {
            const campo = formu.elements[key];
            if (campo) {
                campo.value = data[key];
            }
        }
    } else {
        alert("No se encontraron datos en la base de datos.")
    }
}