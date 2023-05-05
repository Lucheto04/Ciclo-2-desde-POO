const buildTarjeta = (personajes) => {
    const main = document.querySelector("main");
    personajes.results.forEach(p => {
        console.log(p);
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src=${p.image} alt="personaje Rick and morty">
            </div>

            <h2>${p.name}</h2>
            <span>${p.status}</span>
        </article>
        `)

        main.append(article)
    });
}

const obtenerPersonajes = function () {
    fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(data => {
        //console.log(data)
        buildTarjeta(data);
    })
    
    .catch((error) => {
        console.log("Error al consumir la API\n", err.message);
    })
    .finaly(() => {
        console.log("Se ha consumido todo el API");
    })
}

obtenerPersonajes();