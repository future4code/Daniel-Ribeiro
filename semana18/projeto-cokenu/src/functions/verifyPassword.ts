export const verifyPassword = (password: string) =>{
    if(!password || password.length < 6){
        throw new Error('Invalid password.')
    } 

    return password
}