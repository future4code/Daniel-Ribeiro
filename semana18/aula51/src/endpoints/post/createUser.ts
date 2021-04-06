import connection from '../../connection'
import { Request, Response } from 'express'
import { users } from '../../services/tableNames'
import { generateId } from '../../functions/getId'
import generateToken from '../../functions/generateToken'
import getUserByEmail from '../../querys/selects/getUserByEmail'
import insertIntoUser from '../../querys/inserts/insertIntoUser'
import generateHash from '../../functions/generateHash'
import { type } from '../../types/types'

const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_name || !req.body.nickname || !req.body.type) {
            throw new Error('Invalid paramters.')
        }

        if (!req.body.email || !req.body.email.includes('@')) throw new Error('Invalid email.')
        if (!req.body.password || req.body.password.length < 6) throw new Error('Invalid password. It needs be longer than 5 digits.')

        const id = generateId()
        const cypherPassword = await generateHash(req.body.password)
        let typeUser = ''

        if(String(req.body.type).toUpperCase() !== 'ADMIM' && String(req.body.type).toUpperCase() !== 'NORMAL'){
            throw new Error("Invalid type, it must be 'ADMIM' or 'NORMAL'")
        }

        if(String(req.body.type).toUpperCase() === 'ADMIM'){
            typeUser = 'ADMIM'
        }

        if(String(req.body.type).toUpperCase() === 'NORMAL'){
            typeUser = 'NORMAL'
        }

        if(!id) throw new Error('Invalid id.')

        const userBody = {
            id,
            email: req.body.email,
            password: cypherPassword,
            user_name: req.body.user_name,
            nickname: req.body.nickname,
            type: typeUser
        }

        const user = await getUserByEmail(users, userBody.email)
       
        if (user.length > 0) {
            throw new Error('User already exist.')
        }

        await insertIntoUser(userBody, users)

        const token = generateToken({ id, type: typeUser })

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email: userBody.email,
                user_name: userBody.user_name,
                nickname: userBody.nickname,
                type: typeUser
            },
            token
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
export default createUser