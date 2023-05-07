function randomElement(max) {
    return Math.floor(Math.random() * max);
}

let pokeRandom = randomElement(150);
console.log(randomElement(pokeRandom));

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});

const fetchData = async () => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`);
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log(TienesUnError);
    }
}
