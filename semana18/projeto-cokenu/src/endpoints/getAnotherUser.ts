import {Request, Response} from 'express'
import getData from '../functions/getData'
import getUserInfos from '../querys/gets/getUserInfos'
import { users } from '../tableNames/tableNames'

const getAnotherUser = async (req: Request, res: Response) =>{
    try {
        const token = req.headers.authorization as string
        const id = req.params.id 

        if(!id) throw new Error('Invalid id.')
        if(!token) throw new Error('Invalid token.')

        const anotherUser = await getUserInfos(id, 'id', users)

        if(anotherUser.length < 1) throw new Error('User dont exist.')

        res.status(200).send({
            user: {
                id: anotherUser[0].id,
                name: anotherUser[0].name,
                email: anotherUser[0].email
            }
        })

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
export default getAnotherUser