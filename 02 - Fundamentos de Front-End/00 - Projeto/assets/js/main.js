











// http-server .

const offset = 0
const limit  = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
  .then( (response) => console.log(response))
  .then( (response) => console.log(response))
  .catch( (error) => console.log(error))

