import connection from '../../connection'
import { Request, Response } from 'express'
import { users } from '../../services/tableNames'
import { generateId } from '../../functions/getId'
import generateToken from '../../functions/generateToken'
import getUserByEmail from '../../querys/selects/getUserByEmail'
import insertIntoUser from '../../querys/inserts/insertIntoUser'

const createUser = async (req: Request, res: Response) => {
    try {
        const id = generateId()

        const userBody = {
            id,
            email: req.body.email,
            password: req.body.password,
            user_name: req.body.user_name,
            nickname: req.body.nickname
        }

        if (!id || !userBody.password || !userBody.user_name || !userBody.nickname) {
            throw new Error('Invalid paramters.')
        }

        if (!userBody.email || !userBody.email.includes('@')) throw new Error('Invalid email.')
        if (!userBody.password || userBody.password.length < 6) throw new Error('Invalid password. It needs be longer than 5 digits.')

        const user = await getUserByEmail(users, userBody.email)
        console.log(user.length)
        if (user.length > 0) {
            throw new Error('User already exist.')
        }

        await insertIntoUser(userBody, users)

        const token = generateToken({ id })

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email: userBody.email,
                password: userBody.password,
                user_name: userBody.user_name,
                nickname: userBody.nickname
            },
            token
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
export default createUser