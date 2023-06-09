// Iteradores por conteo: for
// partes de un for:
//     inicialización: inicialización de la variable
//     condición: hasta cuando voy a ejecutar la lógica
//     incremento: cuanto quiero que intere el for

for(let i=0;i<=10;i++){
    console.log("el valor es: " + i)
}


// Iteradores por condición: while y do...while
// la diferencia se encuentra en que while ve la condición primero y luego ejecuta la iteración si es correcto, mientras que do...while ejecuta primero y luego analiza el la condición, esto genera que el do while pueda imprimir una vez antes de ver si la condición es correcta

let i = -10
while(i<10){
    console.log("Valor: " + i)
}

let j = 20
do {
    console.log("Valor: " + j);
    i++;
}while(i<10)

// Condición Multiple: Switch
// sin los break el switch va a recorrer desde el caso que es válido

const metodoPago = "efectivo"

switch(metodoPago){
    case "efectivo":
        console.log("Se paga con efectivo");
        break;
    case "cheque":
        console.log("Se paga con cheque");
        break;
    case "tarjeta":
        console.log("Se paga con tarjeta");
        break;
    case "mp":
        console.log("Se paga con mercadoPago");
        break;
    default:
        console.log("Error de pago");
}


// Dentro de los iteradores existen dos comandos que puedes ser usados para casos específicos
// break, para cortar la iteración
// continue, para omitir la iteración en un punto elegido dentro de un if
// isNaN ---> es No a Number
// Number ---> Pasar a Numero
// Para accceder a la página creada http://127.0.0.1:5500/Clases/.....