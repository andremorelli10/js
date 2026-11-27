/* function calcularDesconto(precoTexto, percentual) {

    let num = parseFloat(precoTexto)
    let desconto = (percentual / 100) * num
    let precoFinal = num - desconto
    return precoFinal.toFixed(2)
}

console.log(calcularDesconto("90", 5)) */


 let lista =['farinha', 'frango', 'sal', 'fermento']

/* let q = 0

while (q < lista.length) {
    console.log(lista[q])
    q = q + 1 
}

console.log("************************")

for (let w = 0; w < lista.length; w++) {
   console.log(lista[w])
   
} */

   function auxiliar(item) {
        console.log(item)
   }

   lista.forEach(auxiliar)

   lista.forEach(function (item) {
    console.log(item)
    console.log("******")
   })

   let lista2 = ['arroz', 'feijao', 'bife', 'batata-frita']

   lista2.forEach((item) => {
    console.log(item)
   })




