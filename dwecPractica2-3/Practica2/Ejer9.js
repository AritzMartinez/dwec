
let numeros = [];
let i=0;
let confir;
while (confir!=false) {
    numeros[i] = prompt("Introduce un numero ");
    confir = confirm("Quieres seguir?");
    console.log(numeros[i]);
    i++;
}
console.log("Máximo: " +Math.max(...numeros));
console.log("Mínimo: " +Math.min(...numeros));