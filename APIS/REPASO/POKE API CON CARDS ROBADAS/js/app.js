document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
// Funcion para generar un numero aleatorio
function randomElement(max) {
    return Math.floor(Math.random() * max);
}
// En esta variable solicitamos un numero aleatorio entre 1 y 150, que serian la cantidad de pokemones de la API
let pokeRandom = randomElement(150);
//
const fetchData = async () => {
    try {
        // solicitamos la informacion del API, invocando un pokemon random con la variable creada
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`);
        // convertimos la informacion a JSON
        const data = await respuesta.json();
        console.log(data);

        //Creamos un objeto con la informacion que queremos mostrar del pokemon
        const pokemon = {
            img: data.sprites.front_shiny,
            nombre: data.name,
            vida: data.stats[0].base_stat,
            exp: data.base_experience,
            tipo: data.types[0].type.name,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat

        }
        //Invocamos la funcion pintarCard para transmitir la informacion al TEMPLATE, incluyendole la data del API
        pintarCard(pokemon);
    } catch (error) {
        console.log(Error`Revisa el codigo la cagaste`);
    }
}

// Creamos una funcion en la cual vamos a crear las cards y las vamos a añadir en el template del HTML por medio del DOM

const pintarCard = pokemon => {
    console.log(pokemon);
    //Accedemos al main por medio del class .flex, para indicar el lugar al que vamos a printear la informacion
    const  flex = document.querySelector('.flex');

    //Accedemos al template creado en el HTML por medio del DOM
    //Estamos accediendo a la informacion del template, por ellos ponemos el querySelector().content, para que no acceda a la etiqueta en si sino a la informacion.
    const template = document.querySelector("#template-card").content;

    // Clonamos el template, al recorrerlo es mejor clonarlo para hacerlos correctamente sin errores en el fragment
    const clone = template.cloneNode(true);

    //Creamos un fragment, que es algo invisible que solo aparece en el js, sin afectar el HTMl
    const fragment = document.createDocumentFragment();

    //Accedemos a la informacion del HTML que vamos a cambiar, y escogemos su atributo por medio del Element.setAttribute() 
    // Element.setAttribute: tiene un nombre y valor es decir que src es el nombre y su valor es estatico en este caso
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML =/*html*/ `${pokemon.nombre} <span>Hp: ${pokemon.vida}</span>`;
    clone.querySelector('.card-body-text').textContent = /*html*/`EXP: ${pokemon.exp}`;
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'k';
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'k';
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'k';

    //Le decimos al fragment que guarde el clone creado
    fragment.appendChild(clone);

    //Ya con el clone dentro del fragment lo incluimos al HTML (Flex).
    flex.appendChild(fragment);
}