const fonteDaPagina = () => {
    const fonte = document.getElementById('body')
    fonte.className = 'body'
    console.log("Funcionou")
}
const title = () => {
    const title = document.getElementById('title')
    title.className = 'title'

}

const section = () => {
    const section = document.getElementById('section')
    section.className = 'section'

}
const firstParagraph = () => {
    const firstParagraph = document.getElementById('firstParagraph')
    firstParagraph.className = 'firstParagraph'

}
const secondParagraph = () => {
    const secondParagraph = document.getElementById('secondParagraph')
    secondParagraph.className = 'secondParagraph'

}
const thirdParagraph = () => {
    const thirdParagraph = document.getElementById('thirdParagraph')
    thirdParagraph.className = 'thirdParagraph'

}

const darkmode = () => {
    const darkmode = document.getElementsByClassName('darkmode')
    darkmode.className.add = ('darkmode')

}