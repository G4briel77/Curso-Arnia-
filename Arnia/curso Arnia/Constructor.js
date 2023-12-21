const io = require('../curso Arnia/io/io')

class Carros {
    nome 
    preco
    ano

    constructor(nome, preco, ano){
        this.nome = nome
        this.preco = preco
        this.ano = ano
    }
    aumentarPreco(){
        this.preco += 5000
    }
}

let carros = []
for (let i = 0; i < 3; i++){
    io.write(`Digite o ${i + 1} nome`)
    const nome = io.read()
    io.write(`Digite o ${i + 1} preco`)
    const preco = io.readFloat()
    io.write(`Digite o ${i + 1} ano`)
    const ano = io.read()

    const carros = new Carros(nome,preco,ano)
    carros.push(carros)
}
io.write(carros)

carros.forEach(carro =>{
    carro.aumentarPreco()
})

console.log(carros)
