import express, {Express, Request, Response } from 'express'
import {users, user, extratoType} from './users'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/users/all', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const newUsers: user[] = users.map(user => ({
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

app.post('/users', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const reqBody: user = {
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

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});