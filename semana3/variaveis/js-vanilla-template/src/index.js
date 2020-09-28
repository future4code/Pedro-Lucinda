// ##############Exercícios de interpretação de código

// 1) 10, 5

// 2) 10, 10, 10



//###############Exercícios de escrita de código

1)
let nome 
console.log(typeof(nome))
//undefined
let idade
console.log(typeof(idade))
//undefined

// foi impresso Undefined porque faltou valor na variavel


const nome = prompt('Qual seu nome?')
const idade = prompt('Qual sua idade?')

console.log(nome, idade)
// Imprime o que o usuario digitar

console.log(`Ola ${nome}, voce tem ${idade} anos.`)



// 2

const cor = prompt('Qual sua cor favorita?')
console.log(`Resposta: ${cor}`)

const animal = prompt('Qual seu animal favorito?')
console.log(`Resposta: ${animal}`)

const endereco = prompt('Qual seu endereco?')
console.log(`Resposta: ${endereco}`)

const comida = prompt('Qual sua comida favorita?')
console.log(`Resposta: ${comida}`)

const signo = prompt('Qual e o seu signo?')
console.log(`Resposta: ${signo}`)


// 3

let array = ["chocolate", "abacate", "pizza", "sushi","hamburger"];

console.log(array);
console.log(`Essas sao minhas comidas preferidas`);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// // //Essas sao minhas comidas preferidas
// // index.js:56 chocolate
// // index.js:57 abacate
// // index.js:58 pizza
// // index.js:59 sushi
// // index.js:60 hamburger


const favComida = prompt('qual sua comida preferida?');
let comida2 = array[1];
comida2 = favComida;

console.log(comida2);


// 4

let viagem = prompt('Voce ja foi no RJ?');
let boxe = prompt("Voce Ja lutou boxe");
let bike = prompt("Voce ja andou de bike?");

const pergSouN = [viagem,boxe ,bike ]
console.log(viagem, boxe, bike);
console.log(`Voce ja foi no RJ? ${viagem}` )
console.log(`Voce Ja lutou boxe ${boxe}` )
console.log(`Voce ja andou de bike? ${bike}` )