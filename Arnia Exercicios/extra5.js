const estudantes = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
  ];
  
  function aplicarDesconto(estudantes, callback) {
    return estudantes.map(estudante => {
      const desconto = callback(estudante.idade);
      return { ...estudante, desconto };
    });
  }
  
  function calcularDesconto(idade) {
    if (idade < 20) {
      return 0.1; 
    } else {
      return 0.05; 
    }
  }
  
  const estudantesComDesconto = aplicarDesconto(estudantes, calcularDesconto);
  console.log(estudantesComDesconto);