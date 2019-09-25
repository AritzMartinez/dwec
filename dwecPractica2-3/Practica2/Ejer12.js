

function validaDni() {
    let patt = new RegExp( "^(([A-Z]\\d{8})|\\d{8}|(\\d{8}[A-Z])|([A-Z]\\d{8}[A-Z]))$" )
    var res = patt.test(dato);
    return res;
}
let dato = prompt("Introduce el dato");

if (validaDni(dato)){
    console.log("DNI incorreto");
}else{
    console.log("DNI correcto");
}


/*
function soloLetras(dato){

    var patt = new RegExp("[0-9]");
    var res = patt.test(dato);
    return res;
}
let dato =prompt("introduce el texto");


if (soloLetras(dato)){
    console.log("La cadena no puede tener numeros");
}else{
    console.log("La cadena es correcta");
}
*/







