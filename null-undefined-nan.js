// Declare uma variável nulo e atribua a ela o valor null
let nulo = null;

// Verifique se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===)
let igualAUndefined = (nulo == undefined);
let estritamenteIgualAUndefined = (nulo === undefined);
console.log("nulo é igual a undefined (usando ==):", igualAUndefined);
console.log("nulo é estritamente igual a undefined (usando ===):", estritamenteIgualAUndefined);

// Declare uma variável indefinido sem atribuir nenhum valor
let indefinido;

// Verifique se indefinido é NaN usando a função isNaN
let indefinidoEhNaN = isNaN(indefinido);
console.log("indefinido é NaN:", indefinidoEhNaN);

// Declare uma variável numStr2 com o valor "123abc" (string) e tente convertê-la para um número
let numStr2 = "123abc";
let convertidoParaNumero = Number(numStr2);
let convertidoEhNaN = isNaN(convertidoParaNumero);
console.log("Resultado da conversão de '123abc' para número:", convertidoParaNumero);
console.log("Resultado da conversão é NaN:", convertidoEhNaN);