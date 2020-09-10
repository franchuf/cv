var fran = {
    nombre: 'francisco',
    apellido: 'faner',
    edad: 39,
    estudiante: false,
    ingeniero:true,
    musico: true,
    soldador: true,
}

function profesion (persona){
    if(persona.ingeniero){
        console.log(`${persona.nombre} es ingeniero`);
    }else
        console.log(`${persona.nombre} no es ingeniero`);
    
}