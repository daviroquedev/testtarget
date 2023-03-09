function sequenciaFibonacci(num) {
    let sequencia = [0, 1];
    let anterior = 0;
    let atual = 1;

    while (atual <= num) {
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        sequencia.push(atual);
    }

    return sequencia;
}

function pertenceSequenciaFibonacci(num) {
    const sequencia = sequenciaFibonacci(num);
    return sequencia.includes(num);
}

// A variável numero é definida, mas pode ser substituída por qualquer outro número que se deseje testar.
const numero = 1011;
const sequencia = sequenciaFibonacci(numero);

if (pertenceSequenciaFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci: ${sequencia.join(', ')}.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci: ${sequencia.join(', ')}.`);
}




