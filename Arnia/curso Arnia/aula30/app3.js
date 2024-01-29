const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit' , (evento) =>{
    evento.preventDefault()
    const numero1value = formulario.elements['numero1'].value 
    const numero2value = formulario.elements['numero2'].value 

    const soma = parseInt(numero1value) + parseInt(numero2value)

    console.log(soma)

    const divResultado = document.querySelector('.resultado')
    divResultado.innerHTML = `A soma dos numeros é: ${soma}` 

})