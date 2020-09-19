//Metodos son acciones que se pueden hacer sobre los arreglos. En este caso metodo de filtro. Filter crea un nuevo array con objetos filtrados del array en cuestion.

var discos = [
 {album: "use your ilusion", costo: 200},
   {album:"la era de la b", costo: 300},
{album:"elotro0", costo: 223},
    {album:"elotro1", costo: 333},
    {album:"elotro2", costo: 150},
    {album:"elotro3", costo: 233},
    {album:"elotro4", costo: 120},

];


var filtro = discos.filter(function(articulo){
    return articulo.costo<=250                  //trae un array con objetos con conjunto de articulos cuyo precio es menor a 250
});
    



// function constructora (marca,modelo,anio){
//     this.marca1 = marca;
//     this.modelo1 = modelo;
//     this.anio1 = anio;
// }