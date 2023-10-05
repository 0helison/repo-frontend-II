function calcularMontante(capital, taxaJuros, tempoMeses) {

    const montante = capital * Math.pow((1 + (taxaJuros / 100)), tempoMeses);
    
    alert(`O retorno de investimento é igual a R$ ${montante.toFixed(2)}`);
}

calcularMontante(20000, 0.89, 32);
