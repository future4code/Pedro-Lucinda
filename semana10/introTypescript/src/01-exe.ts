let minhaString: string = 'pedro'
// minhaString = 10

let meuNumero: number | string = 20
meuNumero = 'pedro'

enum CORES  {
	VERMELHO = 'vermelho',
	AZUL = 'azul'
}

type Pessoa = {
	nome: string,
	idade: number,
	corFavorita: CORES
}

const PessoaData : Pessoa = {
	nome: "",
	idade: 0,
	corFavorita: CORES.VERMELHO
}

console.log(PessoaData)