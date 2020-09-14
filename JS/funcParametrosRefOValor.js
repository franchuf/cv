var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
}
var pedro = {
    nombre: 'pedro',
    apellido: 'garcia',
    edad: 12,
}

var presenta = function (persona){
    var {nombre} = persona;
    var {apellido}= persona;
    var {edad}= persona;
    console.log(`mi nombre es ${nombre} y mi apellido es ${apellido} y mi edad es ${edad}`)
}

var cumple = function (persona){ //los objetos que pasamos por parámetro se pasan por referencia, esto quiere decir que si los modificamos dentro de una funcion se van a ver modificados fuera de esa funcion también.
    
    persona.edad+=1;
}
function cumple2(persona){
    return {
        ...persona,
        edad: persona.edad +=1
    }
}


var trans = function (persona){ //para crear un trnsgenero de fran, aunque a la persona de referencia no la toca.
    return {
        ...persona,
        nombre: persona.nombre + '/a'
    }
}

var pedroMasViejo = cumple2(pedro); // me devuelve un objeto pedro con mas edad y pedro lo deja intacto.