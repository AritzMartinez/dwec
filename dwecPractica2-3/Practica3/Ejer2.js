let anotaciones = [];

function inicializar() {
    let fecha = document.getElementById("calendario").value;
    let anotacion = document.getElementById("anotacion").value;

    anotaciones.push(fecha + anotacion);
}

function visualizar() {
    alert(anotaciones);
}


