


//lo que se ve aca abajo es que la variable nombre local de la funcion no afecta a la variable global nombre.



var Fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
}

var NombreYEdad = function (n, e) {
    console.log(` mi nombre es ${n} y mi edad es ${e}`);
}



var ImprimirNombreEnMayusculas = function ({ nombre, apellido }) { //aca con las llaves se interviene adentro del objeto
    nombreCompleto = nombre.toUpperCase() + ' ' + apellido.toUpperCase();
    console.log(`mi nombre completo es ${nombreCompleto}`);

}


