const io = require('../curso Arnia/io/io')

const notas = [10,10,10,5.5,6.4,3,4,9,8,6.5,3]

const somarNotas = notas.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior + valorAtual
}, 0)
console.log(somarNotas)