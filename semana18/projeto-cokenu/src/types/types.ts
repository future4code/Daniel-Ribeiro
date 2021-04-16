export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    user_id: string
}

export type AuthenticationData = {
    id: string,
}