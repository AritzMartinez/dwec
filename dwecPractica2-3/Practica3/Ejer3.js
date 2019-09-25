
let datos = new Object();
function enviar(){


    datos.nombre = document.getElementById("nombre").value;
    datos.direccion = document.getElementById("direccion").value;
    datos.telefono = document.getElementById("telefono").value;
    datos.comentarios = document.getElementById("comentarios").value;
    alert(datos.nombre + " " + datos.direccion + " " + datos.telefono + " " + datos.comentarios)
}

function borrar() {
    delete datos.nombre;
    delete datos.direccion;
    delete datos.telefono;
    delete datos.comentarios;
    alert("datos borrados")
}