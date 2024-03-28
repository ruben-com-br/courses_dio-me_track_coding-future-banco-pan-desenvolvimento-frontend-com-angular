// functions
function calcularImc(peso,altura){
  return peso / ( altura * altura );
}

function classificarImc(imc){
  const ABAIXO = 'Abaixo do Peso';
  const ABAIXO_VALOR = 18.5;

  const NORMAL = 'Peso normal';
  const NORMAL_VALOR = 25;

  const ACIMA = 'Acima';
  const ACCIMA_VALOR = 30;

  const OBESO = 'Obeso';
  const OBESO_VALOR = 35;

  const GRAVE = 'Obesidade Grave';

  if ( imc < ABAIXO_VALOR ) return ABAIXO;
  if ( imc < NORMAL ) return NORMAL; 
  if ( imc < ACIMA ) return ACIMA_NORMAL;
  if ( imc < OBESO ) resultado = OBESO_VALOR;
  return GRAVE;
}

// input
const peso = 100.0; 
const altura = 2.00; 

// calc
const imc = calcularImc(peso,altura);
const resultado = classificarImc(imc);

// output
console.log(resultado)