alert(cadenaDividir("Tienedetodo"));
function cadenaDividir(cadena) {
    let resultado = cadena.split("",cadena.length/2);
    let resultado2 = cadena.substring(cadena.length/2);
    let union = resultado+resultado2
    return union
}