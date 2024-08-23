// Declare as variáveis com os valores fornecidos
let x = 8;
let y = 12;
let z = 8;

// Compare se x é maior ou igual a y e exiba o resultado no console
let maiorOuIgual = x >= y;
console.log("x é maior ou igual a y:", maiorOuIgual);

// Verifique se x é diferente de z (usando !=) e se x é estritamente diferente de z (usando !==). Exiba os resultados no console.
let diferenteDe = x != z;
let estritamenteDiferenteDe = x !== z;
console.log("x é diferente de z (usando !=):", diferenteDe);
console.log("x é estritamente diferente de z (usando !==):", estritamenteDiferenteDe);

// Use uma expressão lógica para verificar se x é menor que y e z é maior que x. Exiba o resultado no console.
let condicao1 = x < y && z > x;
console.log("x é menor que y e z é maior que x:", condicao1);

// Use uma expressão lógica para verificar se x é igual a z ou y é menor que z. Exiba o resultado no console.
let condicao2 = x === z || y < z;
console.log("x é igual a z ou y é menor que z:", condicao2);