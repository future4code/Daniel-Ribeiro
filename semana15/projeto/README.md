### Projeto da semana 15

### Como testar o projeto:

** Formato das datas: yyyy/mm/dd. **
** Valores monetários no formato de ponto americano. **

### Endpoints:

- Método GET, '/users/all': 
Retorna todos os clientes no seguinte formato:

[
    {
        "id": 2,
        "nome": "Samuel",
        "cpf": 12000000015,
        "nascimento": "19/05/1994",
        "saldo": 0,
        "extrato": []
    }
]

- Método GET, '/users/saldo?name=nomeDaPessoa':
Retorna o saldo de um usuário específico:

{
    "nome": "Daniel",
    "saldo": "R$ 50,00"
}

- Método GET, '/users/extrato/:id':
Retorna o extrato de uma pessoa específica, passando o id como parâmetro:

[
    {
        "valor": 15.5,
        "data": "2021/03/05",
        "descricao": "hot dog"
    },
    {
        "valor": 20.78,
        "data": "2021/03/12",
        "descricao": "bolo"
    }
]

- Método POST, '/users/create':
Cria um novo cliente:

É preciso passar o body no formato: 

    {
        "id": 2,
        "nome": "Samuel",
        "cpf": 12000000015,
        "nascimento": "1994/08/12",
        "saldo": 0,
        "extrato": []
    }

- Método PUT, '/users/add-saldo':
Adiciona um saldo:

É preciso passar o body no formato: 

{
    "id": 1,
    "nome": "Daniel",
    "valor": 70.00
}

- Método PUT, '/users/pay':
Pagar uma fatura:

É preciso passar o body no formato:

{
    "id": 1,
    "valor": 70.55216,
    "data": "2021/03/22",
    "descricao": "Pagamento de fatura."
}

- Método PUT, '/users/transfer':
Para trânsferir dinheiro entre contas do mesmo banco:

é preciso passar o body no formato:

{
    "nome": "Daniel",
    "cpf": 12000000000,
    "nomeDestinatario": "Samuel",
    "cpfDestinatario": 12000000015,
    "valor": 100
}
