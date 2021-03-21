import express, {Express, Request, Response } from 'express'
import {users, user, extratoType} from './users'
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
app.get('/users/saldo', (req: Request, res: Response) =>{
    let errorCode: number = 400 
    try {
        let userName: string = req.query.name as string

        if (!userName){
            errorCode = 422
            throw new Error('Invalid Parameters.')
        } else {

            const index: number = users.findIndex(user =>
                (user.nome).toLowerCase() === (userName).toLowerCase()
            )

            const nameUser = users[index].nome
            const saldo = users[index].saldo.toFixed(2).replace('.', ',')
            
            if (typeof saldo === 'string') {
                res.status(200).send({nome: nameUser, saldo: `R$ ${saldo}`})
                
            } else{
                res.status(200).send('Deu ruim.')
            } 
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
})

// pegando o extrato de um usuário
app.get('/users/extrato/:id', (req: Request, res: Response) =>{
    let errorCode = 400
    try {
        const result: user | undefined = users.find(user =>
            (user.id) === Number(req.params.id)
        )

        const contas = result?.extrato.map((c) =>{
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
app.post('/users', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            nome: req.body.nome,
            cpf: req.body.cpf,
            nascimento: req.body.nascimento,
            saldo: req.body.saldo,
            extrato: req.body.extrato,
        }

        let dateUser = new Date(req.body.nascimento)
        let dataMilissegundos = Date.now() - dateUser.getTime()
        let ageinYears = dataMilissegundos / 1000 / 60 / 60 / 24 / 365

        if(ageinYears >= 18){
            if (!req.body.nome || !req.body.cpf || !req.body.nascimento || req.body.saldo < 0 || !req.body.extrato) {
                errorCode = 422;
                throw new Error("Please check the fields.")
            } else {
                users.push(reqBody)
                res.status(201).send(users)
            }
        } else{
            errorCode = 422
            throw new Error('Only for adults.')
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

// adicionando saldo
app.put('/users/:id', (req: Request, res: Response) =>{
    let errorCode: number = 400
    type body = {
        nome: string,
        valor: number
    }

    const reqBody: body = {
        nome: req.body.nome,
        valor: Number(req.body.valor),
    }

    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(req.params.id)
        )

        if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        }

        if (!req.params.id) {
            errorCode = 422
            throw new Error("Invalid Parameters");
        } else {
            users[userIndex].saldo += Number(reqBody.valor.toFixed(2))
        }

        res.status(200).send({message: 'Saldo successfully updated', users})

    } catch (error) {
        res.status(errorCode).send(error.message)
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