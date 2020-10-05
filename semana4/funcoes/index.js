//################### Exe 1
//a 10 e 50
//b Nada pois nao tem console.log dentro da funcao


//################### Exe 2
//a Darvas e Caio
//b Amanda e Caio


//################### Exe 3

// Ela testa se os numeros contidos em um array sao pares. 
// Nome melhor seria numPares
 

//################### Exe 4
//a
const info = () => console.log('Eu sou Pedro, tenho 24 anos')

//b
const infoB = (nome, idade, cidade, estudante) => {
    const isStudent = estudante => estudante == true ? 'sou estudante' : "nao sou estudante"
    let bool = isStudent(estudante)

    console.log(`Eu sou ${nome}, tenho ${idade} anos. Nasci em ${cidade} e ${bool}`)
}
infoB('Pedro', 24, "Porto Nacional", false)


//################### Exe 5
//a
const soma = (num1, num2) => num1 + num2
console.log(soma(2,5))

//b
const eMaiorOuIgual = (numb1, numb2) => numb1 >= numb2 ? true : false
console.log(eMaiorOuIgual(4,2))

//c
const print10x = (palavra) => {
    for(let i = 0; i<10; i++){
        console.log(palavra)
    }
}
console.log(print10x("pedro"))


//################### Exe 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a
const numEl = array =>  array.length
console.log(numEl(array))

//b
const boolEven = num => num % 2 === 0 ? true : false
console.log(boolEven(3))

//c
const evenInArray = array => {
    let evenArray = []

    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            evenArray.push(array[i])
        }
    }

    return evenArray.length
}
console.log(evenInArray(array))


// ################### DESAFIO
// ################### Exe 1
//1
const parameter = parameter => console.log(parameter)
parameter('pedro')

//2
const noReturn = (val1 , val2) => {
    let result = val1 + val2
    return parameter(result)
}
noReturn(2,2)


// ################### Exe 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//a
const evenInArray2 = array => {
    let evenArray2 = []

    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            let num = array[i] * 2
            evenArray2.push(num)
        }
    }
    return evenArray2
}
console.log(evenInArray2(numeros))

//b
const maxNum = array => Math.max(...array)
console.log(maxNum(numeros))

//c

//d
const revers = array => array.reverse()
console.log(revers(numeros))