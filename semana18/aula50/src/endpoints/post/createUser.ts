import connection from '../../connection'
import {Request, Response} from 'express' 
import { users } from '../../services/tableNames'
import { generateId } from '../../functions/getId'
import generateToken from '../../functions/generateToken'

const createUser = async (req: Request, res: Response) =>{
    try {

        const id = generateId()
        const {email, password, user_name, nickname} = req.body

        if(!id || !password || !user_name || !nickname){
            throw new Error('Invalid paramters.')
        }

        if(!email || !email.includes('@')) throw new Error('Invalid email.') 
        if(!password || password.length < 6) throw new Error('Invalid password. It needs be longer than 5 digits.')

        const user = await connection.raw(`
            SELECT *
            FROM ${users}
            WHERE email = "${email}"
        `)

        if(user[0].length > 0){
            throw new Error('User already exist.')
        }

        await connection.raw(`
            INSERT INTO ${users} (id, email, password, user_name, nickname)
            VALUES(
                "${id}",
                "${email}",
                "${password}",
                "${user_name}",
                "${nickname}"
            );
        `)

        const token = generateToken({id})

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                id,
                email,
                password,
                user_name,
                nickname
            },
            token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
export default createUser