import { Request, Response } from 'express'
import generateHash from '../functions/generateHash'
import { generateId } from '../functions/generateId'
import generateToken from '../functions/generateToken'
import createUser from '../querys/inserts/createUser'
import { users } from '../tableNames/tableNames'

const signup = async (req: Request, res: Response) => {
    try {

        if (!req.body.name || !req.body.email || !req.body.password) {
            throw new Error('Invalid parameters. Please check the filds.')
        }

        if (req.body.password.length < 6) {
            throw new Error('Your password needs be longer than five digits.')
        }

        if(!req.body.email.includes('@')){
            throw new Error('Invalid email. Try again.')
        }

        const id = generateId()
        const cypherPassword = await generateHash(req.body.password)

        const body = {
            id,
            name: req.body.name,
            email: req.body.email,
            password: cypherPassword
        }

        const token = generateToken({ id })


        await createUser(body, users)

        res.status(201).send({
            message: 'User created successfully.',
            token
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
}
export default signup