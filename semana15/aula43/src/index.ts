
import express, { Request, Response } from 'express'
import { users, user, UserType } from './users'
import { AddressInfo } from "net";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


// Primeiro exercício
app.get('/users/all', (req: Request, res: Response) => {
    try {
        const newUsers: user[] = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
            age: user.age
        }))

        res.status(200).send(newUsers)
    } catch (error) {
        res.status(400).send('Error')
    }
})

// Segundo exercício
app.get('/users/search', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const newUsers: user[] = users
        let userType: string = req.query.type as string

        if (!userType){
            errorCode = 422
            throw new Error('Invalid Parameters.')
        } else {
            let filteredUsers = newUsers.filter(
                user => (user.type.toLowerCase()).includes((userType).toLowerCase())
            )

            if (filteredUsers.length < 1) {
                res.status(200).send('No user was found, please check de type.')
            } else {
                res.status(200).send(filteredUsers)
            }
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Terceiro exercício
app.get('/users/:name', (req: Request, res: Response) => {
    const result: user | undefined = users.find(user =>
        (user.name).toLowerCase() === (req.params.name as string).toLowerCase()
    )

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send('Not Found')
    }
})

// Quarto exercício
app.post('/users', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        }

        if (!req.body.id || !req.body.name || !req.body.email || !req.body.type || !req.body.age) {
            errorCode = 422;
            throw new Error("Please check the fields.")
        } else {
            res.status(201).send(reqBody)
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

// Quinto exercício
app.put('/users/edit/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(req.params.id)
        )

        if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        }

        if (!req.body.name) {
            errorCode = 422
            throw new Error("Invalid Parameters");
        } else {
            users[userIndex].name = req.body.name;
        }

        res.status(200).send('Country successfully updated')

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// Sexto exercício
app.patch('/users/edit/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(req.params.id)
        )

        if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        }

        if (!req.body.name) {
            errorCode = 422
            throw new Error("Invalid Parameters");
        } else {
            users[userIndex].name = req.body.name;
        }

        res.status(200).send('User successfully updated')

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// Sétimo exercício
app.delete('/users/remove/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userIndex: number = users.findIndex(
            user => user.id === Number(req.params.id)
        )

        if (userIndex === -1) {
            errorCode = 404
            throw new Error('Not found.')
        }

        if (req.params.id) {
            users.splice(userIndex, 1)
        } else {
            errorCode = 422
            throw new Error('Invalid parameters.')
        }

        res.status(200).send('User removed successfully.')
    } catch (error) {
        res.status(400).send(error.message)
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