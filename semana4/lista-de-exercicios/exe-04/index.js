//Exercicios de Objetos
// ==> 1
    // Utilizamos arrays para agrupar dados iguais
    // Utilizamos modelos para fazer representacoes da vida real, agrupando dados e metodos

// ==> 2

    const criarRetangulo = (lado1, lado2) => {
        return {largura: lado1, altura: lado2, perimetro: 2*(lado1+lado2), area: lado1*lado2}
    }
    console.log(criarRetangulo(2,2))

// ==> 3

    const filmeFav = {
        titulo: "Bleed for this",
        ano: 2016,
        diretor: 'Pedro',
        atores: ["Joao", 'Maria']
    }

    console.log(`Venha assistir ao fime ${filmeFav.titulo}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estralado por ${filmeFav.atores[0]} e ${filmeFav.atores[1]}`)


// ==> 4
    const pessoa = {
        nome:'Pedro',
        idade:24,
        email:'pedro@gmail.com',
        endereco:'Rua Albion',

        anonimizarPessoa: ()=> {
            const anonimo = {...pessoa}
            anonimo.nome = 'ANONIMO'
            anonimo.idade = 'ANONIMO'
            anonimo.email = 'ANONIMO'
            anonimo.endereco= 'ANONIMO'
            return anonimo
        }
    }

 console.log(pessoa.anonimizarPessoa())



