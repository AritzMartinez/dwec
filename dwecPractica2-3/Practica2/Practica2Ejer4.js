/*let sueldo = prompt("Introduce el sieldo",sueldo);
let anos = prompt("Introduce los años en la empresa",anos);
let texto =prompt("introduce el texto",texto);
if (soloLetras()){
 console.log("Caracteres no permitidos")
}*/

function soloLetras(string){

    var patt = new RegExp("[0-9]");
    var res = patt.test(string);
    return res;
}
let string =prompt("introduce el texto");


if (soloLetras(string)){
    console.log("La cadena no puede tener numeros");
}else{
    console.log("La cadena es correcta");
}

//Solo letras

function soloLetras(string){

    var patt = new RegExp("[0-9]");
    var res = patt.test(string);
    if (res == true){
        console.log("Cadena incorrecta correcta");
    }
}

let string =prompt("Introduce el texto");

soloLetras(string);



function soloNumeros(numero){
    var patt = new RegExp("[a-z-A-Z]");
    var res = patt.test(numero);
    return res;
}
let numero =prompt("introduce el texto");


if (soloNumeros(numero)){
    numero.log("La cadena no puede tener letras");
}else{
    numero.log("Cadena correcta");
}


/*let texto =prompt("introduce el texto",texto);

if(soloLetras(texto)){
    console.log(texto)
    console.log("Solo tiene letras")
}else {
    console.log(texto)
    console.log("Caracter no permitido")
}

function soloLetras(texto) {

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.toUpperCase().charAt(i)
        let ASCII = parseInt(caracter)
        if(ASCII<48 || ASCII>90){
            return false
        }
    }
    return true
}*/

console.log(texto)
/*
if (soloLetras()){
    console.log("Caracteres no permitidos")
}
*/

/*function soloLetras(texto) {

    let teclas = texto.toLowerCase();
    letra = " áéíóúabcdefghijklmnñopqrstuvwxyz";

    if(letra.indexOf(teclas)==-1 && !teclas_especiales){
        return false;
    }
}*/























