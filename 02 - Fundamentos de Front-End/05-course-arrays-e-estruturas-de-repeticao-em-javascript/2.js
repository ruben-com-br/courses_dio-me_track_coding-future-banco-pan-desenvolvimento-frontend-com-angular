// 2) Crie um programa que seja capaz de pecorrer uma lista de numero e imprima cada numero par encontrado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i])
  }
}