//Comentario de linea

/*
Comentario de bloque
*/

//Variables
let nombreUsuario ="Frank" //las variables no deben comenzar con mayúsculas
let estaturaUsuario = 1.75
let edadUsuario=40
let telefonoUsuario="3004503234"
let esPaisa=false //(banderas)

//Constantes
const APELLIDOS_USUARIO="Montoya"

//Unir los mensajes cin las variables
//(Concatenar)
//console.log("Buenas tardes "+nombreUsuario+ " tu edad es "+edadUsuario)//Forma 1

//console.log(`Buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)//Forma 2

//Salidas 
//console.log(nombreUsuario)

//Utilizando el DOM
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="solo verde"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")

let tituloMenu = document.getElementById("menu")
tituloMenu.textContent="Videojuegos"

let etiquetaFotoGuason = document.getElementById("guason")
etiquetaFotoGuason.src="img/batman.jpg"
