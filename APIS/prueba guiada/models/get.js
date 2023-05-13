import {llenarFormulario} from "../views/utils.js";

export function get(url, formu){
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        llenarFormulario(formu, data);
    })
    .catch((error) => {
        console.error(error);
    });
}