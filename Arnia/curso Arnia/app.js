const alertaInicio = () => {
    console.log('Bem vindo Gabriel')
    alert('Bem vindo Gabriel')
}

const alertaClick = () => {
    console.log('Gabriel clicou no titulo da pagina')
}
 const alterarParagrafo = () => {
    const paragrafo = document.getElementById('primeiro')
    console.log(paragrafo)
    paragrafo.innerHTML = 'Hello mundo hahahahaha'
 }
 const alterarParagrafoDivs = () => {
    const paragrafo = document.getElementById('primeiro')
    console.log(paragrafo)
    paragrafo.innerHTML = `<div>
    Div1</div>`
 }

 const mudarCor = () => {
    let titulo = document.getElementById('Titulo')
    titulo.className = 'textoVerde'

 }
 const alteraSubtitulo = () => {
    const subtitulo = document.getElementById('subtitulo')
    subtitulo.classList.add('textoVerde')
    subtitulo.classList.add('negrito')
 }