const now = new Date();
const before = new Date('October 8 2019 16:30:00')
const diferencia = now.getTime() - before.getTime();
console.log(diferencia);


const minutos = Math.round(diferencia / 1000 / 60);
const horas = Math.round(minutos / 60);
const dias = Math.round(horas / 24);

console.log(minutos, horas, dias);
console.log(`Este post esta escito hace ${dias} dias`);



