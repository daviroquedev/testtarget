
// 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

// IMPORTANTE:

// a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

// b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

// c) Explique como chegou no resultado.


const distanciaTotal = 100; // em km
const velocidadeCarro = 110; // em km/h
const velocidadeCaminhao = 80; // em km/h
const tempoPedagios = 10 / 60; // em horas

// Tempo que o carro leva para chegar ao ponto de encontro
const tempoCarro = distanciaTotal / velocidadeCarro;

// Tempo que o caminhão leva para chegar ao ponto de encontro
const tempoCaminhao = (distanciaTotal / velocidadeCaminhao) + (2 * tempoPedagios);

// Distância do ponto de encontro até a cidade de Ribeirão Preto
const distanciaRibeiraoPreto = (distanciaTotal - (velocidadeCarro * tempoCarro)) / 2;

// Distância do ponto de encontro até a cidade de Franca
const distanciaFranca = (distanciaTotal - (velocidadeCaminhao * tempoCaminhao)) / 2;

if (distanciaRibeiraoPreto < distanciaFranca) {
  console.log("O carro está mais próximo da cidade de Ribeirão Preto");
} else if (distanciaFranca < distanciaRibeiraoPreto) {
  console.log("O caminhão está mais próximo da cidade de Ribeirão Preto");
} else {
  console.log("O carro e o caminhão estão equidistantes da cidade de Ribeirão Preto");
}