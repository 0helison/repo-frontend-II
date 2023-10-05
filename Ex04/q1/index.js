const populacaoA = 80000;
const taxaCrescimentoA = 3;
const populacaoB = 200000;
const taxaCrescimentoB = 1.5;

function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
    while (populacaoA <= populacaoB) {
        populacaoA += populacaoA * (taxaCrescimentoA / 100);
        populacaoB += populacaoB * (taxaCrescimentoB / 100);
        anos++;
    }
    return anos;
}

const anosNecessarios = calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

alert(`São necessários ${anosNecessarios} anos para a população de A se igualar ou ultrapassar a população de B`);