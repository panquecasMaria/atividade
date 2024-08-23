
// Declare um array numeros com os valores fornecidos
let numeros = [10, 20, 30, 40, 50];

// Use o método push para adicionar o valor 60 ao final do array e exiba o array atualizado no console
numeros.push(60);
console.log("Array após adicionar 60:", numeros);

// Use o método pop para remover o último valor do array e exiba o valor removido e o array atualizado no console
let valorRemovido = numeros.pop();
console.log("Valor removido:", valorRemovido);
console.log("Array após remover o último valor:", numeros);

// Use o método splice para remover o terceiro elemento do array (número 30) e exiba o array atualizado no console
numeros.splice(2, 1); // O primeiro argumento é o índice do elemento a ser removido e o segundo é o número de elementos a serem removidos
console.log("Array após remover o terceiro elemento (número 30):", numeros);
