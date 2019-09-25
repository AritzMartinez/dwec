let fechaNacimiento;
fechaNacimiento = prompt("Introduce la fecha de nacimiento",fechaNacimiento);
console.log(fechaNacimiento)

var hoy = new Date();
console.log(hoy)

var cumpleanos = new Date(fechaNacimiento);
console.log(cumpleanos)

var edad = hoy.getFullYear() - cumpleanos.getFullYear();
var mes = hoy.getMonth()-cumpleanos.getMonth();
var dia = hoy.getDay()-cumpleanos.getDay();

if (hoy.getMonth() - cumpleanos.getMonth() <0 || (hoy.getMonth() - cumpleanos.getMonth() === 0 && hoy.getDay()<cumpleanos.getDay())){

    edad--;

}
console.log(edad);
