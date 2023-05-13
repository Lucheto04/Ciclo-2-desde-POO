import {post} from "../models/post.js"
import {get} from "../models/get.js"
import {put} from "../models/put.js"
import {delet} from "../models/delete.js"
export function controlador(formu, event, entidad){
    const URL = "http://localhost:5002/";
    let url = "";
    let data = Object.fromEntries( new FormData(formu));

    switch(event.target.value){
        case "Agregar":
            url = URL + entidad;
            post(url, data);
            formu.reset();
            break;
        case "Buscar":
            url = URL + entidad + `/${data.id}`;
            get(url, formu);
            break;
        case "Editar":
            url = URL + entidad + `/${data.id}`;
            put(url, data);
            break;
        case "Eliminar":
            url = URL + entidad + `/${data.id}`;
            delet(url);
            break;
    }
};