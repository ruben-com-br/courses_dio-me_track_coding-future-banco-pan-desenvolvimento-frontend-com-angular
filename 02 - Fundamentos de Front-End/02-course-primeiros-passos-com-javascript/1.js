/*

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/


// input
const precoLitro = 5.50;
const consumo = 9.5;
const distancia = 100;

// calc
const litrosNecessarios = distancia / consumo;
const gasto = litrosNecessarios * precoLitro;

// output
console.log(gasto)