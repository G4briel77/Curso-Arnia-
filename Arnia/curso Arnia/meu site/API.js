const timestamp = (new Date()).getTime()
const publicKey = '4567b0546684014242090ea412f2956e'
const privateKey = '810bad4daf63f97aff2b92f0d537b712da99703b'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
.then(respostaHttp => respostaHttp.json())
.then(resposta =>{ 
    console.log(resposta.data.results)

    const personagens = resposta.data.results
    const content = document.querySelector('#content')

    personagens.forEach(personagem => {
        content.innerHTML = content.innerHTML + 
        
    `
    <div>
    ${personagem.name}
    <img class ="imagem" src = "${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
        `
    
});
})