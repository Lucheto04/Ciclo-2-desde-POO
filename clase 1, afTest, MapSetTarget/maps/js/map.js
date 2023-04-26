function distanciaLetras(s, distance){
    const dLetras = new Map();
    for (let i=0; i <= s.length; i++){
        let letra = s.charAt(i);
        if (dLetras.has(letra)){
            d = i- dLetras.get(letra) - 1
            if (d >= 0) {
                pos = letra.charCodeAt(0) - 97;
                if (d !== distance[pos])
                    return false;
            }
        } else {
            dLetras.set(letra, i)
        }
    };
    return true
};

let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rta = distanciaLetras(s, distance);
console.log(rta);