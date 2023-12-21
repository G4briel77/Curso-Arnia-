const io = require('../curso Arnia/io/io')

io.write("Digite um numero natural:")

let n = io.readInt()

function divisores(n) {
    if(n > 0){
        io.write(`Os divisores de ${n} são:`)
    }
    else{
        io.write("Digite um numero natural valido")

    }
    for(let c = 1; c <= n; c++){
        if( n % c === 0){
        io.write(c)
        }
        
    
    }


    
}
divisores(n)
