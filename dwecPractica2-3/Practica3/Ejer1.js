

let nombres =["Aritz","Miguel","Adrian","Sergio" ];
let contraseñas =["a","b","c","d"];

function comprobar() {
let nombre = document.getElementById("nombre").value;
let pwd = document.getElementById("contraseña").value;
alert(nombre);
alert(pwd);

    if (nombres.includes(nombre) == true && contraseñas.includes(pwd) == true ){
        alert("nombre y ususaros correctos")
    }else {
        alert("nombre y ususarios incorrectos")
    }

}