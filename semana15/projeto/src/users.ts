export type user = {
    id: number,
    nome: string,
    cpf: number,
    nascimento: string,
    saldo: number,
    extrato: extratoType[]
}

export type extratoType = {
    valor: number,
    data: string,
    descricao: string
}

export const users: user[] = [
    {
        id: 1,
        nome: "Daniel",
        cpf: 12000000000,
        nascimento: "19/05/1993",
        saldo: 0.0,
        extrato: [{valor: 15.50, data: "20/03/2021", descricao: "hot dog"},{valor: 20.50, data: "19/03/2021", descricao: "bolo"}]
    }, 
    {
        id: 2,
        nome: "Samuel",
        cpf: 12000000015,
        nascimento: "19/05/1994",
        saldo: 0.0,
        extrato: []
    }
]