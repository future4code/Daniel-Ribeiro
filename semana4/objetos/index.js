/* post = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    conteudo: document.getElementById("conteudo-post"),
    imagem: document.getElementById('img-post'),
}

tituloPost = post.titulo
autorPost = post.autor
conteudoPost = post.conteudo
imgPost = post.imagem
 */

//<div><img src=${conteudoPost.value}></div>
//console.log(allPosts)
contador = 0

addPost = () => {
    post = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
        imagem: document.getElementById('img-post').value,
    }
    
    tituloPost = post.titulo
    autorPost = post.autor
    conteudoPost = post.conteudo
    imgPost = post.imagem

    allPosts[contador] = [post]
    contador++
    console.log(allPosts)

    if(tituloPost.value == '' || autorPost.value == '' || conteudoPost.value == '') {
        alert('Existem campos obrigatórios que estão vazios.')
    } else {
        
        //window.location.href = "postagens.html"
        containerPost = document.getElementById('container-de-posts')
        containerPost.innerHTML += `<article class="box-article">
                                        <h1>Título: ${tituloPost}</h1>
                                        <h3>Autor: ${autorPost}</h3>
                                        <p>${conteudoPost}</p>
                                        <img src=${conteudoPost}>
                                    </article>`
    }
    
    const itens = document.getElementsByClassName('input')
    for (i in itens) {
        itens[i].value = ''
    }
    
}