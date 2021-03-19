export type user = {
    nome: string,
    cpf: number,
    nascimento: string,
    saldo: number,
    extrato: extratoType[]
}

export type extratoType = {
    valor: number,
    data: "",
    descricao: string
}

export const users: user[] = [
    {
        nome: "Daniel",
        cpf: 12000000000,
        nascimento: "19/05/1993",
        saldo: 0,
        extrato: []
    }, 
    {
        nome: "Samuel",
        cpf: 12000000015,
        nascimento: "19/05/1994",
        saldo: 0,
        extrato: []
    }
]