export const goToBack = (history) =>{
    history.goBack()
}

export const goToLogin = (history) =>{
    history.push('/')
}

export const goToRegister = (history) =>{
    history.push('/register')
}

export const goToPosts = (history) =>{
    history.push('/posts')
}

export const goToCreatePost = (history) =>{
    history.push('/create-post')
}

export const goToPost = (history, id) =>{
    history.push(`/post/${id}`)
}