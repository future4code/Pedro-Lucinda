
// ############# 1
// 10

// ############# 2 

// 19
// 21
// 23
// 25
// 27
// 30

// Nao

// ############# DESAFIO
//  Resultado seria 
// 0
// 00
// 000
// 0000


// ################ 3

let arrayOrigin = [2,3,4]
// a) 
for(let i = 0; i <arrayOrigin.length; i++){
    console.log(arrayOrigin[i])
}

// b
for(let i =0; i <arrayOrigin.length; i++){
    console.log(arrayOrigin[i]/10)
}

// c
const newArrayEven = () => {
    
    let arrayOrigin = [2,3,4,5,6];
    let newArray = [];

    for(let i = 0; i <arrayOrigin.length ; i++){
        if(arrayOrigin[i] % 2 === 0){
            newArray.push(arrayOrigin[i])
        }
    }
    console.log(newArray)
    
}

console.log(newArrayEven())

// d
//  Confuso
for(let i = 0; i<arrayOrigin.length ; i++){
    console.log(`O elemento do index ${arrayOrigin.indexOf(arrayOrigin[i])} e ${arrayOrigin[i]}`)
}

// e
var maior = arrayOrigin.reduce(function(a, b) {
            return Math.max(a, b);
          });
var menor = arrayOrigin.reduce(function(a, b) {
            return Math.min(a, b);
          });

console.log(maior,menor)


