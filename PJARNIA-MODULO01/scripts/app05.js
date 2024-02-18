const meusDados = () => {
    window.location = "../html/meuperfil.html";
  };
  
  const meusResgates = () => {
    window.location = "../html/meusresgates.html";
  };
  
  const sair = () => {
    window.location = "../index.html";
  };
  
  const mostrarResgates = (dadosApi) => {
    const resgate = document.querySelector(".resgates");
  
    dadosApi.forEach((resgatados) => {
      const data = resgatados.horario;
      const imagem = resgatados.imagem;
      const nome = resgatados.titulo;
      const preco = resgatados.joias;
  
      resgate.innerHTML += `
       <div class="card">
            <div class='data'>
                <span>${data}</span>
            </div>
            <div class='informacoes'>
                <img src='${imagem}'>
                <h3>${nome}</h3>
                <span>${preco} jóias</span>
            </div>
       </div>
       `;
    });
  };
  
  const carregarResgates = async () => {
    const resposta = await fetch("http://localhost:3000/resgates");
    console.log(resposta);
    const dados = await resposta.json();
    console.log(dados);
  
    mostrarResgates(dados);
  };
  carregarResgates();