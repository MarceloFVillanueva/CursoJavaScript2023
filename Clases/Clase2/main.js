//alert()

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let full_name = nombre + " " + apellido

let confirmar = confirm("Su nombre completo es: " + full_name + ".\nEs correcto?")


if (confirmar){
    console.log(full_name + ", confirma su nombre")
}else{
    console.log("No confirma nombre")
}