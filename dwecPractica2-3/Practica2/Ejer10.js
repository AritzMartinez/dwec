for (var ano = 2030; ano <= 2050; ano++) {
    var dia = new Date(ano, 0, 1);
    if ( dia.getDay() === 0 )
        console.log("1 de enero en domingo en el año "+ano);
}