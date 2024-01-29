const botao = document.getElementById('botao')

botao.addEventListener('click',() => {
    console.log('botao foi clicado(Ação foi executada pelo ouvinte)')
})

botao.addEventListener('mouseover', () =>{
    botao.classList.add('verde')
})
botao.addEventListener('mouseout', () =>{
    botao.classList.remove('verde')
})

botao.addEventListener('dblclick', () =>{
    const container = document.querySelector('.container')
    container.classList.remove('none')
})