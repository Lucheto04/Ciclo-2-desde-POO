export function put(url, datos){
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (data !== undefined) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
        } else {
            alert("El registro no existe en la DB para poder modificarlo");
        }
    })
    .catch((error) => {
        console.error(error);
    });
}