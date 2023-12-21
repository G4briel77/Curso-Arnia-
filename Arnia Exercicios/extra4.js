const estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
  ];
  
  const aplicarDesconto =(estudantes, callback) => {
    estudantes.forEach(estudante => {
      const desconto = callback(estudante.idade);
      estudante.desconto = desconto;
    });
  }
  
  const calcularDesconto = (idade)=> {
    if (idade < 20) {
      return 0.1; 
    } else if (idade >= 20 && idade <= 22) {
      return 0.15; 
    } else {
      return 0.2; 
    }
  }
  
  aplicarDesconto(estudantes, calcularDesconto);
  
  console.log(estudantes);