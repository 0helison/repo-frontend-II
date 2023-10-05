let salarioInicial = parseFloat(prompt('Digite o salário inicial do funcionário em 1995:'));
let taxaDeAumentoTotal = 0;

for (let ano = 1996; ano <= 2023; ano++) {
    taxaDeAumentoTotal += 0.015; 
    taxaDeAumentoTotal *= 2; 
}

let salarioAtual = salarioInicial * (1 + taxaDeAumentoTotal);

console.log('Salário atual do funcionário em 2023:', salarioAtual.toFixed(2));
