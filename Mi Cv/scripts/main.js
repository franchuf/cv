//let miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello world!'; /* esta es la primera aplicacion de js que uso para indentar en una pagina web. Que paso? la variable miTitulo ahora es un selector de todo lo que sea h1, h2 o cualquier cosa. El innerHTML le obliga a acambiar lo que hay en el eelector por el texto hello world!*/
let miFoto = document.querySelector('img');
miFoto.onclick = function() {
    let miSrc = miFoto.getAttribute('src');
    if (miSrc === 'imagenes/foto.jpg') {
      miImage.setAttribute('src','imagenes/foto2.jpg');
    } else {
      miImage.setAttribute('src', 'imagenes/foto.jpg');
    }
}
        