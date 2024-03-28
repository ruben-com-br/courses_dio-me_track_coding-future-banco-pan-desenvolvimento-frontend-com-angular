// final
const REPROVACAO = 'Reprovado';
const RECUPERACAO = 'Recuperacao';
const APROVADO = 'Aprovado';

// input
const n1 = 4.0; 
const n2 = 5.0; 
const n3 = 5.0; 

// calc
const media = ( 4 + 5 + 5 ) / 3

let resultado; 
if ( media < 5 ) {
  resultado = REPROVACAO;
} else if ( media >= 5 && media < 7 ) {
  resultado = RECUPERACAO;
} else {
  resultado = APROVADO;
}

// output
console.log(resultado)