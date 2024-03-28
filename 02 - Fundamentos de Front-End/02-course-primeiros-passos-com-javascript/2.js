/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/


// final
const GASOLINA = 'Gasolina'; 
const ETANOL = 'Etanol';

// input
const tipo = GASOLINA; 

const precoEtanol = 6.00;
const precoGasolina = 4.00;

const consumoEtanol = 10.0;
const consumoGasolina = 15.00;

const distancia = 100;

// calc
let preco;
let consumo;
if ( tipo === GASOLINA){
  preco = precoGasolina;
} else if ( tipo === ETANOL ) {
  preco = precoEtanol;
}

consumo = ( tipo === GASOLINA ? consumoGasolina : consumoEtanol );

const litrosNecessarios = distancia / consumo;
const gasto = litrosNecessarios * preco;

// output
console.log(gasto)