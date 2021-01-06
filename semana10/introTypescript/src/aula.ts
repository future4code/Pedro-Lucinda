console.log("Hey, Mundo! Guenta eu que hoje eu tô d+++++");

const nome: string = "João";
let idades: (number | string)[] = [5, 6, 7, "io"];
const lista: Array<number | string> = [];

type person = { name: string, age: number }

const astrodev: person = {
    name: "astrodev",
    age: 3
}

const listaDePessoas: person[] = [
    {
        name: "string",
        age: 3
    },
    {
        name: "number",
        age: 3
    }
]
enum Marca {
    FORD = "Ford",
    VOLKSWAGEN = "VolksWagen",
    HONDA = "Honda"
}


type carro =
    {
        marca: Marca,
        volumeDoTanque: number,
        temMotorFlex: boolean,
        calculaAutonomia: (combustivel: number) => number
        vidroETrava?: boolean,
    }

const meuCalculo = (combustivel: number): number => {
    return 15 * combustivel
}

const mustang: carro = {
    marca: Marca.FORD, volumeDoTanque: 61, temMotorFlex: false,
    calculaAutonomia: meuCalculo
};

const gol: carro = {
    marca: Marca.VOLKSWAGEN, volumeDoTanque: 55, temMotorFlex: true,
    calculaAutonomia: function (combustivel: number): number { return 0 }, vidroETrava: true
};
mustang.calculaAutonomia(10);


const garagem: carro[] = [mustang, gol, {
    marca: Marca.HONDA, volumeDoTanque: 70, temMotorFlex: true,
    calculaAutonomia: function (combustivel: number): number { return 0 }
}]



//exercicio 4
const kombi: carro = {
    marca: Marca.VOLKSWAGEN,
    volumeDoTanque: 45,
    temMotorFlex: false,
    calculaAutonomia: function (combustivel: number) {
        return 15 * combustivel
    }
}

const frota: Array<
> = [mustang, gol, kombi]

function buscarCarrosPorMarca(frota: carro[], marca?: string): carro[] {
    if (marca === undefined) {
        return frota
    }

    return frota.filter(
        (carro: carro) => {
            return carro.marca === marca
        }
    )
}

function sum(number1: number, number2: number): number {

    return number1 + number2;
}

const mySum = (number1: number, number2: number): number => {
    return number1 + number2;
}


function myVoid(name?: string): void {
    console.log("Hello, " + name || "World")
}

myVoid("Mateus");

enum LabenuClasses {
    SAGAN = "Sagan",
    HAMILTON = "Hamilton",
    JULIAN = "Julian",
    MELLO = "Mello",
    TURING = "Turing",
    JACKSON = "Jackson",
    DUMONT = "Dumont"
}

type LabenuTeacher = {
    name: string,
    class: LabenuClasses
}

const mateus: LabenuTeacher = {
    name: 'Mateus',
    class: LabenuClasses.DUMONT
}