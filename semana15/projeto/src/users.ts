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
        nascimento: "1993/05/19",
        saldo: 50,
        extrato: [
            {
                valor: 15.50,
                data: "2021/03/05",
                descricao: "hot dog"
            },
            {
                valor: 20.78,
                data: "2021/03/12",
                descricao: "bolo"
            }
        ]
    },
    {
        id: 2,
        nome: "Samuel",
        cpf: 12000000015,
        nascimento: "1994/08/12",
        saldo: 0,
        extrato: []
    }
]