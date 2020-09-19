var carro = {
    marca:"toyota",
    modelo:"corolla",
    annio:2020,
    detalleDelAuto: function(){
        console.log(`auto ${this.marca}, ${this.modelo}, ${this.annio} `)
    }
}

var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 23,
}

var nombreYedad = function (persona){
    //var nombre = persona.nombre; es lo mismoque de ahi abajo
    var {nombre} = persona
    var {apellido}=persona
    var {edad}=persona
    console.log(`hola me llamo ${nombre} y mi apellido es ${apellido} y tengo ${edad} años`)
}

function cumpleanios (persona){
    persona.edad += 1;
}