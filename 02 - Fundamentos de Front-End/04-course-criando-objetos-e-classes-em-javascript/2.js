/*

2) Crie uma classe para representar pessoas.

Para cada pessoas teremos os atributos nome, peso e altura;
As pessoas devem ter a capacidade de dizer o valor do seu IMC
IMC = pessoa / ( altura * altura )

Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura
Peça ao José para dizer o valor do seu IMC;

*/

class Pessoa{
  nome;
  peso;
  altura;
  
  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  
  calculaIMC(){
    const imc = this.peso / ( this.altura * this.altura );
    return imc;
  }
}

const jose = new Pessoa('José','100',1.70);
const imc = jose.calculaIMC();

console.log(imc);
