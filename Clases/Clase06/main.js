//alert("Prueba")

const nombres = ["Matias", "Leonardo", "Daniela", "Facundo", "Pedro"]
console.table(nombres)
console.log(nombres[0])

nombres.push("Pepe")
console.table(nombres)

const meses = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio")
console.table(meses)
console.log(typeof meses)

for(let i = 0 ; i < meses.length ; i++){
    console.log(meses[i])
}

console.log(nombres.join(" / "))
console.log(nombres.concat((meses)))

console.log(nombres.slice(1,3))
console.log(nombres.indexOf("Facundo"))

console.log(nombres.includes("Pedro"))
console.log(nombres.includes("Diego"))

console.log(nombres.reverse())
console.log(nombres)