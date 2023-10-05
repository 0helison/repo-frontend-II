function calcular(raio){
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    alert(`A área do círculo é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}`)
}

const raio = parseFloat(prompt('Qual o raio do círculo? '))

calcular(raio)

