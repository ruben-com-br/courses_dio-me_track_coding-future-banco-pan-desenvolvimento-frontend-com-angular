
const entradas = [10,5,50,98,23];

let i = -1;

function gets(){
   if ( i === -1 ){
      i = i + 1;   
      return entradas.length;
   } else {
      i = i + 1;
      return entradas[i++];
   }

 }
 
 function print(texto){
   console.log(texto);
 }
 
 
 module.exports = { gets, print };