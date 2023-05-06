//https://pokeapi.co/api/v2/pokemon/

function randomElement(max) {
    return Math.floor(Math.random() * max);
}
let article;
let article1;
let boton = document.querySelector("#aleatorio");
boton.addEventListener("click", obtenerPersonajes = function () {
    let pokeRandom = randomElement(150)
    let pokeRandom1 = randomElement(150)
    console.log(pokeRandom);
    console.log(pokeRandom1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}/`)
    .then(result => result.json())
    .then(data1 => {
        article1 = data1
        console.log(article1.name);
        document.querySelector("#article").innerHTML =/*html*/
        `
        <img src=${article1.sprites.front_default} alt = "">
        `
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRandom1}/`)
    .then(result => result.json())
    .then(data => {
        article = data
        console.log(article.name);
        document.querySelector("#article1").innerHTML =/*html*/
        `
        <img src=${article.sprites.front_default} alt = "">
        `
    });

})


//----------------------------------------------------------------//

/*
JSON_server


*/