function calcularDesconto(precoTexto, percentual) {

    let num = parseFloat(precoTexto)
    let desconto = (percentual / 100) * num
    let precoFinal = num - desconto
    return precoFinal.toFixed(2)
}

console.log(calcularDesconto("15", 10))







