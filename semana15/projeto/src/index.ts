import express, { Express, Request, Response } from 'express'
import { users, user, extratoType } from './users'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

// pegando todos os usuários
app.get('/users/all', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const newUsers: user[] = users.map(user => ({
            id: user.id,
            nome: user.nome,
            cpf: user.cpf,
            nascimento: user.nascimento,
            saldo: user.saldo,
            extrato: user.extrato,
        }))

        res.status(200).send(newUsers)
    } catch (error) {
        res.status(errorCode).send('Error')
    }
})

//Pegando saldo
app.get('/users/saldo', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        let userName: string = req.query.name as string

        if (!userName) {
            errorCode = 422
            throw new Error('Invalid Parameters.')
        } else {

            const index: number = users.findIndex(user =>
                (user.nome).toLowerCase() === (userName).toLowerCase()
            )

            const nameUser = users[index].nome
            const saldo = users[index].saldo.toFixed(2).replace('.', ',')

            if (typeof saldo === 'string') {
                res.status(200).send({ nome: nameUser, saldo: `R$ ${saldo}` })

            } else {
                res.status(200).send('Deu ruim.')
            }
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
})

// pegando o extrato de um usuário
app.get('/users/extrato/:id', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result: user | undefined = users.find(user =>
            (user.id) === Number(req.params.id)
        )

        const contas = result?.extrato.map((c) => {
            return c
        })

        if (result) {
            res.status(200).send(contas)
        } else {
            errorCode = 400
            res.status(errorCode).send('Not Found')
        }
    } catch (error) {
        res.status(errorCode).send(error)
    }
})

// criando novo usuário
app.post('/users/create', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            nome: req.body.nome,
            cpf: req.body.cpf,
            nascimento: req.body.nascimento,
            saldo: Number(req.body.saldo.toFixed(2)),
            extrato: req.body.extrato,
        }

        let dateUser = new Date(req.body.nascimento)
        let dataMilissegundos = Date.now() - dateUser.getTime()
        let ageinYears = dataMilissegundos / 1000 / 60 / 60 / 24 / 365

        if (!req.body.nome || !req.body.cpf || !req.body.nascimento || req.body.saldo < 0) {
            errorCode = 422;
            throw new Error("Please check the fields.")
        }

        const cpfList: number[] = users.map((user) => {
            return user.cpf
        })

        let cpfVerificado = 0
        for (let i = 0; i < cpfList.length; i++) {
            if (reqBody.cpf === cpfList[i]) {
                cpfVerificado = cpfList[i]
                console.log(cpfVerificado)
            }
        }

        if (reqBody.cpf !== cpfVerificado && ageinYears >= 18) {
            users.push(reqBody)
            res.status(201).send(users)
        } else if (ageinYears < 18) {
            errorCode = 422
            throw new Error('Only for adults.')
        } else if (reqBody.cpf === cpfVerificado) {
            errorCode = 422
            throw new Error('Este cpf já está vinculado a uma conta.')
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

// adicionando saldo
app.put('/users/add-saldo', (req: Request, res: Response) => {
    let errorCode: number = 400
    type body = {
        id: number,
        nome: string,
        valor: number
    }

    const reqBody: body = {
        id: req.body.id,
        nome: req.body.nome,
        valor: Number(req.body.valor),
    }

    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(reqBody.id)
        )

        if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        }

        if (!req.body.id) {
            errorCode = 422
            throw new Error("Invalid Parameters");
        } else {
            users[userIndex].saldo += Number(reqBody.valor.toFixed(2))
        }

        res.status(200).send({ message: 'Saldo successfully updated', users })

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// pagando fatura
app.put('/users/pay/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    type body = {
        id: number,
        valor: number,
        data: string,
        descricao: string
    }

    const reqBody: body = {
        id: req.body.id,
        valor: Number(req.body.valor),
        data: req.body.data,
        descricao: req.body.descricao
    }

    let dateUser = new Date(req.body.data)
    let dateUserTimeStamp = dateUser.getTime()
    let dateNow = Date.now()

    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(req.body.id)
        )

        const saldo = users[userIndex].saldo
        const gastos = users[userIndex].extrato.map((item) => {
            return item.valor
        })

        let gastosTotal = 0
        for (let i = 0; i < gastos.length; i++) {
            gastosTotal += Number(gastos[i])
        }

        if (dateUserTimeStamp < dateNow) {
            throw new Error('Não é possível pagar um fatura que já venceu.')
        } else if (gastosTotal > saldo) {
            throw new Error('Você não tem saldo suficiente para pagar a fatura.')
        } else if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        } else if (!req.body.id) {
            errorCode = 422
            throw new Error("Invalid Parameters")
        } else {
            users[userIndex].extrato.push({
                valor: Number(reqBody.valor.toFixed(2)),
                data: reqBody.data,
                descricao: reqBody.descricao
            })
            users[userIndex].saldo = Number((users[userIndex].saldo - gastosTotal).toFixed(2))
            console.log(users[userIndex].saldo)
            res.status(200).send({ message: 'Payment successfully.', users })
        }

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/users/transfer', (req: Request, res: Response) =>{
    try {

        const indexEnvio = users.findIndex((user) =>{
            return user.cpf === Number(req.body.cpf) 
        })

        const indexDestinatario = users.findIndex((user) =>{
            return user.cpf === Number(req.body.cpfDestinatario) 
        })

        const body = {
            nomeEnvio: req.body.nome,
            cpfEnvio: req.body.cpf,
            nomeDestinatario: req.body.destinatario,
            cpfDestinatario: req.body.cpfDestinatario,
            valor: req.body.valor
        }

        if(body.valor > users[indexEnvio].saldo){
            throw new Error(`Não há saldo suficiente para efetuar esta transferência. Teu saldo no momento é: R$ ${users[indexEnvio].saldo.toFixed(2).replace('.',',')}`)
        } else {
            users[indexDestinatario].saldo += body.valor
            users[indexEnvio].saldo -= body.valor
            res.status(200).send({envio: users[indexEnvio], destinatario: users[indexDestinatario]})
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});