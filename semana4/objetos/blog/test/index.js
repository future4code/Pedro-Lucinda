const tituloInp = document.querySelector('#titulo-post');
const autorInp = document.querySelector('#autor-post');
const conteudoInp = document.querySelector('#conteudo-post');
const imageInp = document.querySelector('#imagem-post')

const post = {
    titulo: tituloInp,
    autor: autorInp,
    conteudo: conteudoInp,
    imagem: imageInp
}


function criarPost() {
    
    const container = document.querySelector('#containerPosts')
    const newDiv = document.createElement('div')
    newDiv.className = "post"
    container.append(newDiv)


    newDiv.innerHTML =
        `<h1 class="tituloPost"> ${tituloInp.value} </h1> 
        <br> 
        <img class="imgPost" src="${imageInp.value}" >
        <p class="autorPost"> ${autorInp.value} </p> 
        <br> 
        <div id="contPost">
        <p class="contentPost"> ${conteudoInp.value} </p>
        `

    post.titulo.value = ''
    post.autor.value = ''
    post.conteudo.value = ''
    post.imagem.value = ''


}



