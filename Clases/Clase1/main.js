// Comentario forma 1
/* Comentario forma 2 */

// Comentado rápido ctrl k c
// Descomentado rápido ctrl k u

// Tipos de Datos

"Cadenas de caracteres"
1
true

// Para definir variables, en ves de usar var (antes), usamos let (se guarda en memoria 19:54)

let nombre;  // Definición de variable
nombre = "Marcelo" // Asignación de variable

let edad = "33" // Definición y asignación de variable

// No se puede declarar una constante como 'const PI;' porque las constantes necesitan tener un valor inicializado, tampoco se le puede asignar otro valor luego

const PI = 3.14;

// Visualización de datos e incorporación de datos

/*
    Formas:
    console.log
    alert()
    prompt()
    confirm()
*/

// // console.log

// console.log(1)
// console.log("hola")
// console.log(1+1)

// // alert

// alert(1)
// alert("hola Mundo")
// alert(nombre)

// // Para que no molesten tanto los alert en la página se puede mostrar en el documento (20:16)

// document.write(1)
// document.write("hola Mundo")
// document.write(nombre)

// prompt 
// el input ingresa como str

let input = prompt("Ingrese número")
console.log(input)

// el ';' no es necesario con js