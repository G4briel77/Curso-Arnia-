const io = require('../curso Arnia/io/io')

const array = [1,2,7.50,45,65,44,22,78,56,24]

const novoarray = array.filter((item) =>{
    return item % 2 === 0

})

console.log(novoarray)