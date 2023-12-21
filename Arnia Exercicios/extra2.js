const produtos = 
[
{ id: 1, nome: 'Camiseta', preco: 29.9 },
{ id: 2, nome: 'Calça', preco: 59.9 },
{ id: 3, nome: 'Tênis', preco: 99.9 }
]

const calcularTotal =((produtos) => {
let total = 0 
for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
    
}
return total

})


const total = calcularTotal(produtos)

console.log(total)