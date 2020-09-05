//una funcion donde se genera un Template

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = [];


for(i=0;i<1;i++){
    
    var marca = prompt("ingresa marca");
    var modelo = prompt("ingresa modelo");
    var annio = prompt("ingresa annio");
    autoNuevo.push( new auto(marca,modelo,annio));
}