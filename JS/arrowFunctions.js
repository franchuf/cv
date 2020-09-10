var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
    estudiante: false,
    ingeniero:true,
    musico: true,
    soldador: true,
}

var pedro = {
    nombre: 'pedro',
    apellido: 'garcia',
    edad: 13,
    estudiante: false,
    ingeniero:true,
    musico: true,
    soldador: true,
}
const MAYORIA_DE_EDAD=18;

const esMayorDeEdad = ({edad})=> edad>=MAYORIA_DE_EDAD;          //este es el arrow function. Es otra forma de escribir lo mismo

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);

    }
    else console.log(`${persona.nombre} es menor de edad`);
}

const acceso = persona=> {
    if (!esMayorDeEdad(persona)){
        console.log('acceso denegado!');
    }
}
    
const esMenorDeEdad = ({edad})=> edad<=MAYORIA_DE_EDAD;
    


