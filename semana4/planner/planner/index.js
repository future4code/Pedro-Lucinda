
const createTask = () => {

    const diaInp = document.querySelector('#dias-semana').value;
    const tarefaInp = document.querySelector('#tarefa').value;
    const tarefaInp2 = document.querySelector('#tarefa');


    tarefaInp2.value = ""

    if(tarefaInp === ''){
        return alert('Insira alguma tarefa!')
    }


    if (diaInp == 'segunda') {
        const segunda = document.querySelector('#segunda')
        segunda.innerHTML += `<p> ${tarefaInp} </p>`
    } else if (diaInp == 'terca') {
        const terca = document.querySelector('#terca')
        terca.innerHTML += `<p> ${tarefaInp} </p>`
    } else if (diaInp == 'quarta') {
        const quarta = document.querySelector('#quarta')
        quarta.innerHTML += `<p> ${tarefaInp} </p>`
    } else if (diaInp == 'quinta') {
        const quinta = document.querySelector('#quinta')
        quinta.innerHTML += `<p> ${tarefaInp} </p>`
    } else if (diaInp == 'sexta') {
        const sexta = document.querySelector('#sexta')
        sexta.innerHTML += `<p> ${tarefaInp} </p>`
    } else if (diaInp == 'sabado') {
        const sabado = document.querySelector('#sabado')
        sabado.innerHTML += `<p> ${tarefaInp} </p>`
    } else {
        const domingo = document.querySelector('#domingo')
        domingo.innerHTML += `<p> ${tarefaInp} </p>`
    }

}

