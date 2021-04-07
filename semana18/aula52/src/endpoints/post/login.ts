import { Request, Response } from 'express'
import getUserByEmail from '../../querys/selects/getUserByEmail'
import { users } from '../../services/tableNames'
import generateToken from '../../functions/generateToken'
import compareHash from '../../functions/compareHash'

const login = async (req: Request, res: Response) => {
    try {
        const userLogin = {
            email: req.body.email,
            password: req.body.password
        }

        if (!userLogin.email || !userLogin.email.includes('@')) throw new Error('Invalid email.')

        const user = await getUserByEmail(users, userLogin.email)

        if (user.length < 1) {
            throw new Error('User dont exist.')
        }

        const comparePasswords = await compareHash(userLogin.password, user[0].password)
        
        if (!comparePasswords) {
            throw new Error("Invalid password");
        }

        const token = generateToken({id: user[0].id, type: user[0].type})

        res.status(200).send({ token: token })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
export default login