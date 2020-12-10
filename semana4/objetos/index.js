
allPosts = []
contador = 0

addPost = () => {
    post = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
    }
    
    tituloPost = post.titulo
    autorPost = post.autor
    conteudoPost = post.conteudo
    //imgPost = post.imagem


    if(tituloPost.value == '' || autorPost.value == '' || conteudoPost.value == '') {
        alert('Existem campos obrigatórios que estão vazios.')
    } else {

        postFormatado = `<article class="box-article">
                            <h1>Título: ${tituloPost}</h1>
                            <h3>Autor: ${autorPost}</h3>
                            <p>${conteudoPost}</p>
                        </article>`
        identificadorPostagem = 'postagem' + String(contador)
        localStorage.setItem(identificadorPostagem, postFormatado)
        contador++
    }
    
    const itens = document.getElementsByClassName('input')
    for (i in itens) {
        itens[i].value = ''
    }
    
}

carregarPosts = () => {
    identificadorPost = ''
    containerPost = document.getElementById('container-de-posts')
    for (i = 0; i < localStorage.length; i++) {
        identificadorPost = 'postagem' + String(i)
        posts = localStorage.getItem(identificadorPost)
        containerPost.innerHTML += posts 
    }
    
}


