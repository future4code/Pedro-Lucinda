// Exercicios de Funcoes de array

// ==>1 
    const pessoas =   [
                        { nome: "Pedro", idade: 20 },
                        { nome: "João", idade: 10 },
                        { nome: "Paula", idade: 12 },
                        { nome: "Artur", idade: 89 }
                    ]

    const arrayAdultos = [] 

    const adultos = pessoas.map((adulto) => {
        if(adulto.idade >= 20){
            return arrayAdultos.push(adulto)
        }
    })
    console.log(arrayAdultos)

// ==> 2
    const array = [1, 2, 3, 4, 5, 6]

// ==> a
    const vezesDois = array.map(num => num *2)
    console.log(vezesDois)

// ==> b
    const vezesTres = array.map(num => (num * 3).toString())
    console.log(vezesTres)

// ==> c
    const parImpar = () => {
        let arrayStrings = []

        for (let num of array){
            if(num %2 === 0){
                arrayStrings.push(`${num} e par`)
            }else{
                arrayStrings.push(`${num} e impar`)
            }
            
        }
        console.log(arrayStrings) 
    } 
    parImpar()


//3
    const people = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

// no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

// ==> a
    const podeEntrar = people.filter(pessoa => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
    console.log(podeEntrar)
// ==> b
    const naoPode = people.filter(pessoa => pessoa.idade > 60 || pessoa.idade < 14 || pessoa.altura < 1.5)
    console.log(naoPode)


//4
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    //Somente emails
    const emailsDeConfirmacao = () =>{
        for(consulta of consultas){
            if(consulta.cancelada === false ){
                console.log(`Olá, Sr(a). ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo(a) da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuseo recebimento deste e-mail.`)
            }else{
                console.log(`Olá, Sr(a) ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
            }
        }
    }

    emailsDeConfirmacao()



//5

    const contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    // numeros.reduce((a, b) => a + b);
 
    contas.forEach(conta => {
        let arraysCompras = conta.compras;
            for(let i =0; i<arraysCompras.length; i++){
                let valor = arraysCompras[i]
                let novoSaldo= conta.saldoTotal - valor 
                conta.saldoTotal = novoSaldo
            }
    })

    console.log(contas)