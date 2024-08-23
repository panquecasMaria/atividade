// Função que aceita dois números e uma função de operação, e retorna o resultado da operação aplicada aos números
function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
  }
  
  // Função de soma
  function soma(a, b) {
    return a + b;
  }
  
  // Função de multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função que aceita um número e uma função de operação, e repete a operação esse número de vezes, exibindo o resultado a cada iteração
  function repetirOperacao(num, operacao) {
    let resultado = 1; // Inicializamos com 1, pois muitas operações (como multiplicação) têm sentido com 1 como valor inicial
    for (let i = 0; i < num; i++) {
      resultado = operacao(resultado);
      console.log(`Resultado após iteração ${i + 1}:`, resultado);
    }
  }
  
  // Função que conta quantas vezes um caractere aparece em uma string usando forEach
  function contarOcorrencias(str, caractere) {
    let contagem = 0;
    str.split('').forEach(char => {
      if (char === caractere) {
        contagem++;
      }
    });
    return contagem;
  }
  
  // Exemplos de uso
  
  // Usando a função executaOperacao para somar dois números
  let resultadoSoma = executaOperacao(5, 3, soma);
  console.log("Resultado da soma:", resultadoSoma); // 8
  
  // Usando a função executaOperacao para multiplicar dois números
  let resultadoMultiplicacao = executaOperacao(5, 3, multiplicacao);
  console.log("Resultado da multiplicação:", resultadoMultiplicacao); // 15
  
  // Usando a função repetirOperacao para multiplicar o valor 2 por ele mesmo 3 vezes
  repetirOperacao(3, (valor) => valor * 2); // Espera-se que mostre 4, 8 e 16
  
  // Usando a função contarOcorrencias para contar quantas vezes o caractere 'a' aparece em uma string
  let ocorrencias = contarOcorrencias("banana", 'a');
  console.log("Número de ocorrências do caractere 'a':", ocorrencias); // 3