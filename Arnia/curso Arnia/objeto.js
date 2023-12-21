const pessoa1 ={
    nome:"Gabriel Batista" , dataDeNascimento:"19/11/1999" , Naturalidade:"Brasileiro"
}
const pessoa2 ={
    nome:"Laura Welpel" , dataDeNascimento:"10/08/2001" , Naturalidade:"Brasileiro"
}


pessoa2.idade = 25
pessoa1.nome ='Gabriel batista filho'
console.log(pessoa1)

delete pessoa1.nome
delete pessoa2.idade

console.log(pessoa1)
console.log(pessoa2)