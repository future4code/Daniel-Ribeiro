import { Request, Response } from 'express'
import compareHash from '../functions/compareHash'
import generateToken from '../functions/generateToken'
import { verifyEmail } from '../functions/verifyEmail'
import { verifyPassword } from '../functions/verifyPassword'
import getUserInfos from '../querys/gets/getUserInfos'
import { users } from '../tableNames/tableNames'

const login = async (req: Request, res: Response) => {
    try {

        const email = verifyEmail(req.body.email)
        const password = verifyPassword(req.body.password)

        const body = {
            email: email,
            password: password
        }

        const user = await getUserInfos(body.email, 'email', users)

        const comparePasswords = await compareHash(body.password, user[0].password)

        if (!comparePasswords) throw new Error('Wrong password.')

        const token = generateToken({ id: user[0].id })

        res.status(200).send({ token })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
export default login