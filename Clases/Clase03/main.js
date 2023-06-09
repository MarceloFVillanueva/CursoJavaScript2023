console.log("Clase de iteradores clásicos")

const metodoPago = prompt("Ingrese tipo de pago:")

console.log("Método de pago: " + metodoPago)

switch(metodoPago.toLowerCase()){
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
