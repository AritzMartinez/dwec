calcular();

function calcular(){
    let hoy = new Date();
    let navidad = new Date(2019,12,25);
    let diferencia = navidad.getTime()-hoy.getTime();
    let dias = Math.round(diferencia/(1000*60*60*24));
    console.log(hoy.getTime())
    console.log(navidad.getTime())
    console.log(dias)
}

