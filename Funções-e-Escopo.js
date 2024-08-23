// Função soma que aceita dois parâmetros e retorna a soma deles
function soma(a, b) {
    return a + b;
  }
  
  // Função ehPar que recebe um número como parâmetro e retorna true se o número for par, ou false se for ímpar
  function ehPar(numero) {
    return numero % 2 === 0;
  }
  
  // Função dobraValores que recebe um array de números e retorna um novo array com cada valor dobrado
  function dobraValores(arr) {
    return arr.map(valor => valor * 2);
  }
  
  // Função contaCaracteres que recebe uma string e retorna o número de caracteres na string
  function contaCaracteres(str) {
    return str.length;
  }
  
  // Função fatorial que calcula o fatorial de um número
  function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  // Exemplos de uso
  console.log("Soma de 3 e 5:", soma(3, 5)); // 8
  console.log("O número 4 é par?", ehPar(4)); // true
  console.log("O número 5 é par?", ehPar(5)); // false
  console.log("Valores dobrados de [1, 2, 3]:", dobraValores([1, 2, 3])); // [2, 4, 6]
  console.log("Número de caracteres em 'Hello, world!':", contaCaracteres("Hello, world!")); // 13
  console.log("Fatorial de 5:", fatorial(5)); // 120