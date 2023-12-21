const io = require('../curso Arnia/io/io')

function calcularIdadeDias(M){
         const resultado = anos * 365 

         return resultado 
}

io.write("Qual a sua idade?")

let anos = io.readInt()
let meses = calcularIdadeDias(anos)

io.write(`Sua idade em dias é:${meses}`)




