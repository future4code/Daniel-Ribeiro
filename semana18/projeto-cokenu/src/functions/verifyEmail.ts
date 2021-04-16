export const verifyEmail = (email: string) =>{
    /* if(!email) throw new Error('Inva')
    if(!email.includes('@')) throw new Error('Invalid email.')
    if(!email.includes('.com')) throw new Error('Invalid email.') */
    if(!email || !email.includes('@') || !email.includes('.com')){
        throw new Error("Invalid email. Verify if is missing '@' or '.com'.")
    }

    return email
}