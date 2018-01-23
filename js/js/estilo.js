//VARIABLES
/* var nombre;
nombre = prompt("Ingresa Tu Nombre:", nombre);
document.write(nombre);
console.log(nombre); */

//TIPOS DE DATOS

// Numericos
/* var numero = 12.3;
alert("Esto es un dato numerico" + " " + numero);

// String
var texto = "BB TE AMO"
alert("Esto es un texto" + " " + texto);

// Array - Arreglo
var arreglo = [1, 2, "Emanuel"];
alert(arreglo[2]);

//Objetos
var objeto = {
    color: "Black",
    size: "23"
}

// Boolean - Boleano
var ana = true;
document.write(ana); */

//ARREGLOS 

//var amigo = prompt("Ingrese Nombre");
//var amigos = ["Guille", "Luis", "Joaquin"];
/* amigos[amigos.length] = amigo;
console.log("Usted Tiene" + " " + amigos.length + " " + "amigos"); */
//document.write(amigos.sort());

//Condicionales
/* 
var edad = prompt("Ingrese su Edad");

if (edad >= 18) {
    //Intrucciones
    alert("Usted es Mayor de Edad, Pase");
} else {
    alert("Eres Menor de Edad, NO PASE");
} */
//CICLO FOR
/* var numeroDeUsuarios = 50;

for (i = 1; i <= numeroDeUsuarios; i++) {
    document.write(i + "<br>");
} */

//CICLO WHILE
/* var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var numeroDias = dias.length - 1;
var i = 0;

while (i <= numeroDias) {
    document.write(dias[i] + "<br>");
    i++;
} */
//FUNCIONES
/* 
var suma = function(numero1, numero2) {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    return resultado;
}

var texto = "Venezuela Libre";
var nuevoTexto = texto.substring(7);

document.write(nuevoTexto); */

var elementosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("P1");

//CREAR UN NODO DEL DOM

/* // 1- Crear el Elemento
var elemento = document.createElement("h2");
// 2- Crear el Nodo de Texto
var contenido = document.createTextNode("Este es nuestro elemento desde Js");
// 3- Añadir el nodo al elemento
elemento.appendChild(contenido);
// 4- Agregar atributos al elemento
elemento.setAttribute("align", "center");
// 5- Añadir el elemento al documento
document.getElementById("subtitulo").appendChild(elemento); */

//AGREGANDO NODOS AL DOM
var elemento = document.createElement("li"),
    contenido = document.createTextNode("Nuevo Texto");
elemento.appendChild(contenido);
var padre = document.getElementsByTagName("li")[0].parentNode;
var primerElemento = document.getElementsByTagName("li")[0];
padre.insertBefore(elemento, primerElemento);