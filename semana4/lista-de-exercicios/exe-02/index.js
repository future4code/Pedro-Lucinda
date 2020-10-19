// Execicios de Logica de Programacao

// Exe-01
/*
    1- forEach()
    2- filter()
    3- map()
*/


// ==> forEach()
const people = [
    {nome: 'Pedro', id: 24},
    {nome: 'John', id: 10},
    {nome: 'Carlos', id: 20}
]

people.forEach(person => person.id = 0)
console.log(people)
// {nome: "Pedro", id: 0}
// {nome: "John", id: 0}
// {nome: "Carlos", id: 0}


// ==> filter()
    const filtering = people.filter(person => person.nome === 'Pedro')
    console.log(filtering)
    {nome: "Pedro", id: 0}


// ==> map()
    const name = people.map(person => person.nome)
    console.log(name)
    ["Pedro", "John", "Carlos"]



/*Exe-02
 
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3 

// // ==> a
//     false
// // ==> b
//     false
// // ==> c
//     true
// // ==> d
//     true
// // ==> e
//     true


 */




// Exe-03

    function numPares(index) {
        const quantidadeDeNumerosPares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        quantidadeDeNumerosPares.map((num, n) => {
            n = index * 2
            while (num < n) {
                if (num % 2 === 0) {
                    console.log(num)
                }
                break;
            }
        })
    }
    numPares(5)


/* Exe-04
    EQUILATERO = TODOS IGUAIS
    ISOSCELES = 2 LADOS IGUAIS
    ESCALENO = TODOS DIFERENTES
*/

    const tipoTriangulo = (a,b,c) =>{
        if(a === b && a === c){
            console.log('Equilatero')
        }else if (a === b || a === c || b === c){
            console.log('Isosceles')
        }else{
            console.log('Escaleno')
        }
    }

    tipoTriangulo(2,2,2)



// Exe-05
// ==> I.
    const func = (a,b) => {
        a>b ? console.log(a) : console.log(b)

// ==> II.
        a%b === 0 ? console.log(`${a} e divisivel por ${b}`) : console.log(`nao sao divisiveis`) 

// ==> III.
        let diferenca = (a-b)
        console.log(`a difereca entre ele e ${diferenca}`)
    } 
    func(4,2)

