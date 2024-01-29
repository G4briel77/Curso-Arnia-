const cliqueBotao = () => {
    alert('O botão foi clicado!')
}

//recuperando o elemento da página HTMl através do DOM
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    btn.classList.add('vermelho')
})