let valores = [];

for(let i = 1; i < 11; i++){
    var valor = parseFloat(prompt('Digite o ' + i + 'º valor:'));
    valores.push(valor);
}

let soma = 0

for (let valor of valores) {
    soma += valor
}

let maximo = Math.max(...valores);
let minimo = Math.min(...valores);

console.log(`Máximo: ${maximo} / Mínimo: ${minimo} / Soma: ${soma}.`)




