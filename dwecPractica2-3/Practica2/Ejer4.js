let sueldo = parseInt(prompt("Introduce el sueldo "));
let ano = parseInt(prompt("Introduce los años "));

if (sueldo<500 && ano >10){
    sueldo = sueldo*0.20;
    console.log(sueldo);
}
if (sueldo<500 && ano <10){
    sueldo = sueldo*0.10;
    console.log(sueldo);
}
if (sueldo>=500) {
    console.log(sueldo);
}
