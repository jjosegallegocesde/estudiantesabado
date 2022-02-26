//arreglo de objetos

let productos = [
    {nombre:"camiseta",precio:50000,foto:'../img/camiseta1.jpg',descripcion:"Camiseta negra hombre Play station"},
    {nombre:"",precio:320000,foto:"",}
]

//Recorriendo un arreglo de JS
//buscar/seleccionar
productos.forEach(function(producto){
    console.log("Que hubo mijo")
})

//escuchando clic en el boton
let boton = document.getElementById("boton")

//detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){
    let foto = document.getElementById("fotoprueba")
    foto.src="img/juego1.jpg"
}

