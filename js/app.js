//Obtenemos el nombre
let nombre = prompt("Cuál es su nombre?");

//Obtenemos el div que vamos a manipular.
let myApp = document.getElementById("myApp");

//Creamos la variable saludo;
let saludo = "Hola";

//Manipulamos el div sobreescribiendo ambas variables.
myApp.innerHTML = saludo + " " + nombre + "!";


