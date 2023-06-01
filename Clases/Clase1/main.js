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

// Puede que con defer no te funcione bien document.write, por cómo funciona defer que carga en conjunto con el HTML
// Y lo podés solucionar más sencillo poniendo tu script abajo, antes de que cierre el body, sin defer

// prompt 
// el input ingresa como cadena de caracteres

let input1 = prompt("Ingrese número1")
console.log(input1)

let input2 = prompt("Ingrese número2")
console.log(input2)

// el ';' no es necesario con js

// Operadores
//      Matemáticos

/*
    + suma
    - resta
    * multiplicación
    / división
    % resto
*/

//      De cadena

/*
    + unión (concatenar)
*/

console.log(input1 + input2)        // concatenacion (dos cadenas de caracteres)
console.log(input1 + input2 + 100)  // concatenacion (cadenas y números) (coerción de tipo)

// forma de arreglar la coerción

// no recomendable ya que si se agrega un FLOAT se pierde la información al guardarse como int
let input3 = parseInt(prompt("Ingrese número 3"))
console.log(input3)

// mejora pero no es muy recomendable
let input4 = parseFloat(prompt("Ingrese número 4"))
console.log(input4)

// lo más recomendable (en caso de ingresa algo que no sea un número sale como NaN)
let input5 = Number(prompt("Ingrese número 5"))
console.log(input5)