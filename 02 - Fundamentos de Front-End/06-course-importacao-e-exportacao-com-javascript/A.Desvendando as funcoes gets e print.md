# Desvendando as funcoes gets e print
### Revisão e Apresentação do Tema



### Criando a Função gets e print

Arquivo 1
```js
// exportacao
module.exports = { gets, print }
```

Arquivo 2
```js
// importacao
const funcoes = require('./01-A');
```


### O que é o Object Destructuring
```js
// Destroi o objeto
const funcoes = require('./01-A');

// com Object Destructuring
const {gets, print} = require('./01-A');
```


### Considerações Finais da Aula