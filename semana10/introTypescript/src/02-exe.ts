type estatisticasObj = {
	maior:number,
	menor: number,
	media: number
}


function obterEstatisticas(numeros: number[]): estatisticasObj {

	const numerosOrdenados : number[] = numeros.sort(
			(a, b) => a - b
	)

	let soma: number = 0

	for (let num of numeros) {
			soma += num
	}

	
	const estatisticas : estatisticasObj = {
			maior: numerosOrdenados[numeros.length - 1],
			menor: numerosOrdenados[0],
			media: soma / numeros.length
	}

	return estatisticas
}

type Amostra = { 
	numeros : number[],
	obterEstatisticas: void,
}

const amostraDeIdades : Amostra= {

	numeros: [21, 18, 65, 44, 15, 18],

	obterEstatisticas: (numeros: number[]) => {...}
}