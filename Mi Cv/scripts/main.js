//let miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello world!'; /* esta es la primera aplicacion de js que uso para indentar en una pagina web. Que paso? la variable miTitulo ahora es un selector de todo lo que sea h1, h2 o cualquier cosa. El innerHTML le obliga a acambiar lo que hay en el eelector por el texto hello world!*/


let miFoto = document.querySelector('img'); /*se almacena una referencia a mi elemento img en la variable mi foto. */ 
miFoto.onclick = function() { /*esta linea hace que esta propiedad del manejador del evento on.click de la variable sea igual a la funcion sin nombre*/
    let miSrc = miFoto.getAttribute('src'); /* toma el atributo src de la imagen y lo mete en la variable miSrc*/
    if (miSrc === 'imagenes/foto.jpg') {
      miImage.setAttribute('src','imagenes/foto2.jpg');
    } else {
      miImage.setAttribute('src', 'imagenes/foto.jpg');
    }
}
let miImage = document.querySelector('img');
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}
