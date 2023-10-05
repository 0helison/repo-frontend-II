let pares = [];
let impares = [];

for(let i = 1; i < 11; i++){
    var valor = parseFloat(prompt('Digite o ' + i + 'º nota:'));
    if (valor % 2 == 0) {
        pares.push(valor);
    } else {
        impares.push(valor);
    }
}

alert('Pares: ' + pares.length + ' / ' + 'Ímpares: ' + impares.length);


