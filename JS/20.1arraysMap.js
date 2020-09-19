//el map crea un nuevo array modificado, con los nuevos valores del array original
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [paula, vicky, dario, martin, alan, sacha];

var aCm = function(persona,apellido2){
    return {
        
       ...persona,
        
       altura: persona.altura*=100   
       
    }

}
var nPersonas = personas.map (aCm);