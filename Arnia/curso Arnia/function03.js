const io = require('../curso Arnia/io/io')

function calculo(x , z) {
    const resultado = (x**z)
    return resultado
    
}

io.write("Digite o numero de Z")

let z = io.readInt()

io.write("Digite o numero de x")

let x = io.readInt()

let conta = calculo(x,z)