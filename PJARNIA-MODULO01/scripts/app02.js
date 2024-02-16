const getProdutos = async (id) =>{
  const request = await fetch('http://localhost:3000/produtos')
  let produtos = await request.json()
  const produto = produtos.find((p) => p.id === id);
  return produto
}


const mostrarProdutos = async (produto) =>{
  const card = document.getElementById('container-produto')   
  card.innerHTML +=`
  <div class="imagem-produto">
  <img src="${produto.imagem}"/>
</div>
<div class="descricao-produto">
  <h1 class="titulo">${produto.nome}</h1>
  <span class="valor">Por ${produto.preco}<img class"img-diamante" src="../Imagens/diamond.png"></span>
  <p class="texto">${produto.descricao}</p>
  <button onclick="resgatar(${produto.id})">Resgatar</button>
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