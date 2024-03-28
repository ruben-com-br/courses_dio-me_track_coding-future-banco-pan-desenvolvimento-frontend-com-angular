/*
  Crie uma classe para representar carros.
  Os carros possum uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
  Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
  calcularGastoPorPercurso(distancia, precoCombustivel){
    const litrosNecessarios = distancia / this.gastoMedioPorKm;
    const gasto = litrosNecessarios * precoCombustivel;
    return gasto;
  }
}

const uno = new Carro('Fiat', 'Prata', 10.5);

const distancia = 100;
const precoCombustivel = 5.5;

const gasto = uno.calcularGastoPorPercurso(distancia,precoCombustivel);
console.log(gasto);