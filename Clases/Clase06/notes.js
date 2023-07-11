// Notas del profe para nombrar js
// :index.js
// página app: app.js
// sitio web: main.js

// Objetos literales
const obj = {}
console.log(obj);
console.log(typeof(obj));

// Array
const vacio = []
console.log(vacio);
console.log(typeof(vacio));

//Mismo tipo de dato, pero se llaman distinto

//podemos pasar de:
let nombre1 = "Matias";
let nombre2 = "Leonardo";
let nombre3 = "Daniela";
let saludo = `Hola mi nombre es ${nombre1} y ella se llama ${nombre3}`

//a:

let nombres = ["Matias", "Leonardo", "Daniela", "Facundo", "Pedro"]
console.table(nombres)

//Otra manera para definirlo es:

let meses = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio")

//Podemos separar todo lo que hay en el array con:
console.log(nombres.join(" - "))

//pop sirve para eliminar el último objeto de la lista
console.log(nombres.pop())

//shift sirve para eliminar el primer objeto de la lista
console.log(nombres.shift())

//concat sirve para concatenar varios arrays
console.log(nombres.concat((meses)))

//splice sirve para eliminar los objetos en las posiciones requeridas
console.log(nombres.splice(1,2))

//slice sirve para devolver los objetos en las posiciones requeridas
console.log(nombres.slice(1,3))

//indexOf sirve para davolver el número de posición de un objeto
console.log(nombres.indexOf("Facundo"))

//includes sirve para preguntar si el array conviene el objeto requerido
console.log(nombres.includes("Pedro"))
console.log(nombres.includes("Diego"))

//resverse invierte la ubicación de cada objeto en el array, este método modifica el array
console.log(nombres.reverse)
console.log(nombres)

