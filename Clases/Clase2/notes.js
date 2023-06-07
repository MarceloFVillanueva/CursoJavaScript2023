/* 
para ver que el linckeado con main.js esté bien hecho, conviene escribir como línea inicial del código lo siquiente:
alert()
Luego lo podemos borrar o dejar comentado
*/

/*
para ver que el linckeado con style.css esté bien hecho, conviene escribir como línea inicial del código lo siquiente:
body{
    color: blue;
}
Luego lo podemos borrar o dejar comentado
*/

// Vemos condicionales

let name = "Marcelo";
let edad = 33;
let esMasculino = true;

if (esMasculino){
    console.log("Es masculino")
}

console.log("Fin del 1er ejemplo de condicional")

if (esMasculino){
    console.log("Es masculino")
}else{
    console.log("Es femenino")
}

console.log("Fin del 2do ejemplo de condicional")

/*
Tipos de comparaciones

    == igualdad
    === igualdad estricta
    != desigualdad
    !== desigualdad estricta

    < Menor
    <= Menor o igual
    > Mayor
    >= Mayor o igual

*/

let puntaje = prompt("Ingresar puntaje");

console.log(typeof puntaje)

if (Number(puntaje) === 1000){
    console.log("Es igual a 1000")
}else{
    console.log("No es igual a 1000")
}

// para ingresar booleanos en vez de ingresar booleano con prompt, conviene usar
// let confirmar = confirm("confirmar que es correcto")

// Variante del if

let rol = "GUEST"

if (rol == "ADMIN"){
    console.log("Este usuario puede ver y editar los datos")
}else if (rol == "CLIENT"){
    console.log("Este usuario puede ver kis datis")
}else{
    console.log("No es un usuario registrado")
}

/* Operadores lógicos
    && AND
    || OR
    ! NEGACIÓN
*/

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar){
    console.log("Tu pedido se realizó con exito")
}else if (!usuario){
    console.log("Inicia sessión para realizar el pedido")
}else if (!puedePagar){
    console.log("Fondos insuficientes")
}else{
    console.log("Error en el pago")
}