export type user = {
    id: string,
    email: string,
    password: string,
    userName: string,
    nickname: string,
    type: string,
    cep: string,
    numeroCasa: string,
    complemento: string
}

export type Address = {
    id: string,
    cep: string,
    logradouro: string,
    numero_casa: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    user_id: string
}

export enum type {
    ADMIM = 'ADMIM',
    NORMAL = 'NORMAL'
}

export type AuthenticationData = {
    id: string,
    type: string
}