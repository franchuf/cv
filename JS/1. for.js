var estudiantes=["juan","pedro","ignacio"]
function saludo(estudiante){
    console.log(`hola señor, ${estudiante}`);
}
for (i=0;i<estudiantes.length;i++){
    saludo(estudiantes[i]);
}