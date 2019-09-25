
let numeros = [];
let i =0;
let confir;

const reducer = (accumulator, currentValue) => accumulator + currentValue;
while (confir!=false) {
    numeros[i] = parseInt(prompt("Introduce un numero "));
    confir = confirm("Quieres seguir?");
    console.log(numeros[i]);
    i++;
}
console.log(numeros.reduce(reducer));


