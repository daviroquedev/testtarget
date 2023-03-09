// Define a string a ser invertida
let stringOriginal = "Quero ser target!";

// Cria uma string vazia para armazenar a string invertida
let stringInvertida = "";

// Percorre a string original de trás para frente
for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

// Imprime a string invertida
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);