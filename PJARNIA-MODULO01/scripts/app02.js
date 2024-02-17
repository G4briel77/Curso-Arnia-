const getProdutos = async (id) =>{
  const request = await fetch(`http://localhost:3000/produtos?id=${id}`)
  let produtos = await request.json()
  const produto = produtos.find((p) => p.id === id);
  return produto
}


const mostrarProdutos = async (produto) =>{
  const card = document.getElementById('container-produto')   
  card.innerHTML +=`
  <div class="container-produto">
  <img src="${produto.imagem}" id = "imagem-produto"/>
<div class="descricao-produto">
  <h1 class="titulo">${produto.titulo}</h1>
  <div class="valor">Por ${produto.joias}<img class"img-diamante" src="../imagens/diamante.png"></div>
  <p class="texto">${produto.descricao}</p>
  <button onclick="resgatar(${produto.id})" id="btn">Resgatar</button>
</div>
</div>`;

}

const resgatar = (id) =>{
window.location = `../html/resgate02.html?id=${id}`
}

const carregarProduto = async () =>{
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id');
  const produtos = await getProdutos(id)
  mostrarProdutos(produtos)
}

carregarProduto()
