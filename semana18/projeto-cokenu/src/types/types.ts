export type user = {
    id: string,
    email: string,
    password: string,
    user_name: string,
    nickname: string,
    type: string
}

export enum type {
    ADMIM = 'ADMIM',
    NORMAL = 'NORMAL'
}

export type AuthenticationData = {
    id: string,
}