
// info
const DEBITO = 'Debito';
const DEBITO_VALOR = 0.9;

const PIX = 'Pix';
const DINHEIRO = 'Dinheiro';
const PIX_VALOR = 0.85;

const CARTAO_2X = 'Parcelado até 2';
const CARTAO_2X_VALOR = 1;

const CARTAO_3X = 'Parcelado 3x ou mais';
const CARTAO_3X_VALOR = 1.1;

// input
const preco = 100.00;
const condicaoPagamento = PIX;

// calc
const imc = peso / ( altura *  altura );

let taxa; 
if ( condicaoPagamento === DEBITO ) {
  taxa = DEBITO_VALOR;
} else if ( condicaoPagamento === PIX ) {
  taxa = PIX_VALOR;
} else if ( condicaoPagamento === CARTAO_2X ) {
  taxa = CARTAO_2X_VALOR;
} else if ( condicaoPagamento === CARTAO_3X ) {
  taxa = CARTAO_3X_VALOR;
} 

const valorFinal = preco * taxa;
// output
console.log(valorFinal)