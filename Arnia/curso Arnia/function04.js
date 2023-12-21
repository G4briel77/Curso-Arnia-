const io = require('../curso Arnia/io/io')

function parOuImpar(numero){
    if ( numero % 2 === 0){
        io.write(`O numero ${N2} é Par`)
    }
    else if(numero % 2 != 0){
        io.write(`O numero ${N2} é impar`)

    }
    
}

io.write("Digite um numero:")

let N2 = io.readInt()

let escolha = parOuImpar(N2)