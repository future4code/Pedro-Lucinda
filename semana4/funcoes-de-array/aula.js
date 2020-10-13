// const verificaPar = (numero) =>{
//     if(numero % 2 === 0){
//         const resultado = numero / 2
//         imprimeValor(resultado)
//     }
// }

// // function imprimeValor(valor){
// //     console.log(valor)
// // }

// const imprimeValor = (valor) => {
//     console.log(valor)
// }


// verificaPar(2)

//////// ARRAY
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0, vidamax: 1000},
    { nome: "Squirtle", tipo: "agua", vida: 0, vidamax: 2000 },
    { nome: "Charmander", tipo: "fogo", vida: 0, vidamax: 3000 }
]

//############### ForEach

// Objetivo - aumentar vida para 1000
// tres parametros - Element, index e array

// for each passa por cada elemento 
pokemons.forEach((pkmn, idx, pkmns) => {
    pkmn.vida = pkmn.vidamax
    
})

console.log(pokemons)


//############### Map
//Mapear 
// Quando queremos criar um novo array cuja inf depende do original
// Obrigatoriamente retorna um valor
// tres parametros - Element, index e array
const nomeDoPokemons = pokemons.map(pokemon => pokemon.nome)
const vidaPokemons = pokemons.map(pokemon => pokemon.vida /2 )

console.log(nomeDoPokemons)
console.log(vidaPokemons)


const numeros = [1,2,3,4,5,6,7]

const frase = numeros.map((mapp, index, numeros) => {
   return `O elemento ${index} e ${mapp}`
})

console.log(frase)


// // ########## FILER
// // novo array
// // input somente a funcao de callback
// // return boolean 
// retorna os elementos em si

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0 },
    { nome: "Bellsprout", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 0 },
    { nome: "Vulpix", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
    { nome: "Psyduck", tipo: "água", vida: 0 },
]

// const pkmFogo = pokemons.filter((pokemon, index, pokemons)=> {
//     if(pokemon.tipo === 'fogo'){
//         return true
//     }
//     return false
// })

//retorna um array de objetos
// console.log(pokemons)
// console.log(pkmFogo)
// {nome: "Charmander", tipo: "fogo", vida: 0}
//  {nome: "Vulpix", tipo: "fogo", vida: 0}

// posso aplicar MAP na saida de um filter

const pkmFogo = pokemons.filter((pokemon, index, pokemons)=> {
    // if(pokemon.tipo === 'fogo'){
    //     return true
    // }
    // return false
    // Jeito menor 
    return pokemon.tipo === 'fogo'
}).map(pokemon => pokemon.nome)
console.log(pkmFogo)
//["Charmander", "Vulpix"]

const numerosPares = numeros.filter(numero => numero %2 === 0)
console.log(numerosPares)


