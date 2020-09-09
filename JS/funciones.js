var NombreYEdad = function (n,e){
    console.log ( ` mi nombre es ${n} y mi edad es ${e}`);
}



//lo que se ve aca abajo es que la variable nombre local de la funcion no afecta a la variable global nombre.
var nombre = "fran"
var ImprimirNombreEnMayusculas = function (persona){
    nombreCompleto= persona.nombre.toUpperCase() +' '+ persona.apellido.toUpperCase();
    console.log(`mi nombre completo es nombreCompleto es ${nombreCompleto}`);

}

var Fran = {
    nombre: 'francisco', 
    apellido: 'faner',
    edad: 39,
}
