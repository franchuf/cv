var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
    peso:85,
    estudiante: false,
    ingeniero:true,
    musico: true,
    soldador: true,
}

const MAYORIA_DE_EDAD=18;

function esMayorDeEdad (persona){
    return persona.edad>=MAYORIA_DE_EDAD;
    }


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);

    }
    else console.log(`${persona.nombre} es menor de edad`);
}