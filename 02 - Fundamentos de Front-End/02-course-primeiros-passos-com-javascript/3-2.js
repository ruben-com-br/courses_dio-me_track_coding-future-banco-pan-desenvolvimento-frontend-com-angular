
// final
const ABAIXO = 'Abaixo do Peso';
const ABAIXO_VALOR = 18.5;

const NORMAL = 'Peso normal';
const NORMAL_VALOR = 25;

const ACIMA = 'Acima';
const ACCIMA_VALOR = 30;

const OBESO = 'Obeso';
const OBESO_VALOR = 35;

const GRAVE = 'Obesidade Grave';

// input
const peso = 100.0; 
const altura = 2.00; 

// calc
const imc = peso / ( altura *  altura );

let resultado; 
if ( imc < ABAIXO_VALOR ) {
  resultado = ABAIXO;
} else if ( imc < NORMAL ) {
  resultado = NORMAL;
} else if ( imc < ACIMA ) {
  resultado = ACIMA_NORMAL;
} else if ( imc < OBESO ) {
  resultado = OBESO_VALOR;
} else {
  resultado = GRAVE;
}

// output
console.log(resultado)