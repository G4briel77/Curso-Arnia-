const io = require('./io/io')

let numeros = []

for (let i = 0; i < 10; i++) {
    io.write(`Digite o ${i + 1}º número:`)
     numero = io.readInt()
     numeros.push(numero)
    }
    io.write(numeros)

    for ( let i = 0; i < 10; i++) {
        io.write  (`O numero sucessor do informado ${numeros[i] + 1}`)
    }
    
