// Declare as variáveis com os valores fornecidos
let num1 = 788.786;
let num2 = 160.679;

// Arredonde num1 para o valor inteiro mais próximo e exiba no console
let num1Arredondado = Math.round(num1);
console.log("Número arredondado:", num1Arredondado);

// Encontre o valor máximo e mínimo entre num1 e num2 usando Math.max e Math.min, respectivamente, e exiba no console
let max = Math.max(num1, num2);
let min = Math.min(num1, num2);
console.log("Valor máximo:", max);
console.log("Valor mínimo:", min);

// Calcule a raiz quadrada de num2 e exiba no console
let raizQuadrada = Math.sqrt(num2);
console.log("Raiz quadrada de num2:", raizQuadrada);

// Converta num1 para uma string com notação científica e exiba no console
let num1Cientifico = num1.toExponential();
console.log("num1 em notação científica:", num1Cientifico);