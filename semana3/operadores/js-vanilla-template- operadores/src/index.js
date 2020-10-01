
// 1.
// index.js:6 a.  false
// index.js:9 b.  false
// index.js:12 c.  true
// index.js:14 e.  boolean

// 2.
// a.  undefined
// b.  null
// c.  11
// d.  3
// e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f.  9


// ############### Exercicios de escrita de codigo

// 1.

let age = Number(prompt('How old are you?'))
let bfAge = Number(prompt('How old is your best friend?'))

console.log(
            "Your age is greater than your friend's age?" 
            + (age > bfAge) 
            + ' ,the difference of age is: ' + (age - bfAge)
            )

// 2.
let even = Number(prompt('Insert an even number:'))
console.log(even % 2)
// An even number always get the result of 0 when divided by 2
// An odd number always get the result of 1 when divided by 2


// 3.

let listaDeTarefas = [];

let task1 = prompt('What do you need to do today?');
let task2 = prompt('What is another thing you need to do today?');
let task3 = prompt('What is another thing you need to do today?');

listaDeTarefas.push(task1,task2,task3);
console.log(listaDeTarefas);

let removeTask = prompt('What task did you already completed today? From 0 to 2, being 0 the first of the list.');
listaDeTarefas.splice(removeTask, 1);
console.log(listaDeTarefas);

// 4

let name = prompt('What\'s your name?');
let email = prompt('What\'s your email?');
console.log(`The email ${email} was register successfully. Welcome, ${name}!`)


//  ######################## DESAFIO

let grausF = 77
let convK = (grausF - 32)*(5/9) + 273.15
console.log(convK + " K")
// 298.15 K

let grausC = 80
let convF = (grausC)*(9/5) + 32
console.log(convF + ' F')
// 176 F

let grausC2 = Number(prompt('Insert a temperature in Celsius'))
let convF2 = (grausC2)*(9/5) + 32
let convK2 = (convF2 - 32)*(5/9) + 273.15
console.log(convF2 + " F "  + convK2 + " k")
// 89.6 F 305.15 k

