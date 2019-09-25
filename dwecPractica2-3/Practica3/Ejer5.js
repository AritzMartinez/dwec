let datos = new Object();

function enviar() {

    datos.nombre = document.getElementById("nombre").value;
    datos.apellido = document.getElementById("apellido").value;
    datos.correo= document.getElementById("correo").value;
    datos.poblacion = document.getElementById("poblacion").value;
    datos.provincia = document.getElementById("provincia").value;
    alert(datos.nombre + " " + datos.apellido + " " + datos.correo + " " + datos.poblacion + " " + datos.provincia )

}
function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("poblacion").value = "";
    document.getElementById("provincia").value = "";
}



/*function compruebaCorreo(){
    correo = correo.toString();
    patron = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/
    respuesta = patron.test(tuEmail)
}

function comprueba(){

    patron = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/
    respuesta = patron.test(nombre,apellido,poblacion,provincia);
}*/

