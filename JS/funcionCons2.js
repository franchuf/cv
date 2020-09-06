var discos = [
    {album: "disco", costo: 200},
    {album:"casette", costo: 300},
    {album:"libro", costo: 150},
    {album:"perro", costo:399},
    {album:"gato", costo:949},
    {album:"serpiente", costo:323}
];


var filtro = discos.filter(function(articulo){
    return articulo.costo<=150
});//se genera un nuevo array y no modifica el referenciado.



// function constructora (marca,modelo,anio){
//     this.marca1 = marca;
//     this.modelo1 = modelo;
//     this.anio1 = anio;
// }