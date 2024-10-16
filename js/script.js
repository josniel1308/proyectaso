const imagenCompleta = document.getElementById("imagenCompleta")
const imagen = document.getElementById("imagen")
const imagenIzquierda = document.getElementById("izquierdaImagen")
const imagenDerecha = document.getElementById("derechaImagen")
const imagenCerrar = document.getElementById("cerrarImagen")
const imagenLista = [...document.querySelectorAll(".imagen")]


let indice = 0
imagenLista.forEach((elemento, i)=>{
    elemento.addEventListener("click", (e)=>{
        darclick(i)
        imagenCompleta.style.display="flex"
        imagen.src = elemento.src
    })
});
function darclick(posicion)
{
    indice = posicion
    imagen.src = imagenLista[indice].src
}