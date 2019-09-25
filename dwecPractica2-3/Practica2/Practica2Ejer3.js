function palindromo() {
    let cadena = prompt("Introduce el texto que quieras",caches);
    cadena = cadena.replace(/ /g,"");
    console.log(cadena);

    for (let i = 0; i <cadena.length ; i++) {
        if(cadena[i]!=cadena[cadena.length-i-1]){
            return false;
        }
    }
    return true;
}
if (palindromo()){
    console.log("Es palindromo");
}else {
    console.log("No es palindromo")
}
