export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export enum type {
    ADMIM = 'ADMIM',
    NORMAL = 'NORMAL'
}

export type AuthenticationData = {
    id: string,
}