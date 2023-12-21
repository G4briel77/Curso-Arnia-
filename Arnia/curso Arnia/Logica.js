//const io = require('../curso Arnia/io/io')

//io.write('Digite o seu nome:')

//const nome = io.read()

//io.write('O nome a ser mostrado é '  +  nome)

//exercicio 1 

const io = require('../curso Arnia/io/io')

io.write('Digite um numero')

const numero = io.read()

io.write('Obrigado,agora irei trazer o resultado da raiz quadrada de ' + numero)


io.write('o resultado dessa operação é ' + Math.sqrt(numero))

//exercicio 2 

io.write('Agora escreva dois numero para que eu possa calcular o produto dos mesmos:')

const numero1 = io.readInt()
io.write('escreva o segundo numero:')
const numero2 = io.readInt()

io.write('preparado para o resultado?')

io.write(numero1 * numero2)

//exercicio 3 

io.write('Digite dois numeros para eu calcular o resto da divisão entre eles')

const numero3 = io.read()
 
io.write('Agora digite o segundo numero:')

const numero4 = io.read()

io.write('O resto da operação é ' + numero3 % numero4)

//exercicio 4 

io.write('Me informe o valor de um ps5?')

const PS5 = io.read()

io.write('Me informe o preço de um monitor')

const monitor = io.read()

io.write('A média entre o preço desses dois produtos é ' + (PS5 + monitor) / 2)
