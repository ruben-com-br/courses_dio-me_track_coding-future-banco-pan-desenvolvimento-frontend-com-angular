# Entendendo Arrays
### O que é um Array

```js

const alunos = ['Ruben','Joao','Maria'];

console.log(alunos); // ['Ruben','Joao','Maria']

console.log(aluno[0]); // Ruben

console.log(aluno[2]); // Maria

console.log(aluno[3]); // undefined

```

### Adicionando e Removendo Um Array

```js

const alunos = ['Ruben','Joao','Maria'];


// push -> add no final da lista
alunos.push('Renan');
// ['Ruben','Joao','Maria','Renan']

// add no final da lista, apos alunos[3]='Renan'
alunos[4] = 'Vinicius';
// ['Ruben','Joao','Maria','Renan','Vinicius']

// remove no final da lsita
alunos.pop();
// ['Ruben','Joao','Maria','Renan']


// remove no inicio da lista
alunos.shift();
// ['Joao','Maria','Renan']

```

### Entendendo a Necessidade de Estruturas de Repetição

```js

const alunos = ['Ruben','Joao','Maria'];


// push -> add no final da lista
alunos.push('Renan');
// ['Ruben','Joao','Maria','Renan']

// add no final da lista, apos alunos[3]='Renan'
alunos[4] = 'Vinicius';
// ['Ruben','Joao','Maria','Renan','Vinicius']

// remove no final da lsita
alunos.pop();
// ['Ruben','Joao','Maria','Renan']


// remove no inicio da lista
alunos.shift();
// ['Joao','Maria','Renan']

```