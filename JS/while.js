var estudiantes = ["maria","juan","pedro","marcos"];
function saludo(estudiante){
    console.log(`hola, ${estudiante}`);
}
while( estudiantes.length>0 ){
    var estudiante=estudiantes.shift(); //estudiante.shift es una funcion que extrae el primer elemento del array y lo retorna. Este elemento modifica la longitud del array
    saludo(estudiante);
}