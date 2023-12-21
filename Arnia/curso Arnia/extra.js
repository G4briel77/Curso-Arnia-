const array = [1, 2 , 3 , 4 , 5]


const somarValores = array.reduce((valorAnterior,valorAtual)=>{
    return valorAnterior + valorAtual
}, 0)
console.log(somarValores)



