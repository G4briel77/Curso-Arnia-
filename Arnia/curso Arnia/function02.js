const io = require('../curso Arnia/io/io')

function verificarCategoriaIdade(idade){
    if ( idade >= 5 && idade <= 7){
        io.write("Categoria Infantil A")

    }
    else if (idade >= 8 && idade <= 10){
        io.write("Categoria Infantil B")
    }
    else if ( idade >= 11 && idade <= 13){
        io.write("Categoria Juvenil A")
    }
    else if ( idade >=14 && idade <=17){
        io.write("Categoria Juvenil B")
    } 
    else if ( idade >= 18){
        io.write("Categoria Adulto")
    }
}

io.write("Qual a sua idade?")

let IdadeUsuario = io.read()

let categoria = verificarCategoriaIdade(IdadeUsuario)

