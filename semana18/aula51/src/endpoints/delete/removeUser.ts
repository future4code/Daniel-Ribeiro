import {Request, Response} from 'express'
import getData from '../../functions/getData'
import deleteUser from '../../querys/deletes/deleteUser'
import getUserInfos from '../../querys/selects/getUserInfos'
import { users } from '../../services/tableNames'

const removeUser = async (req: Request, res: Response) =>{
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        const authenticationData = getData(token)

        if(authenticationData.type !== 'ADMIM') throw new Error('Only ADMIM can remove users!')
        
        if(!id) throw new Error('Invalid id.')

        const user = await getUserInfos(users, id)

        if (user.length < 1) {
            throw new Error('User dont exist.')
        }

        await deleteUser(users, id)

        res.send('User removed successfully.')

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
export default removeUser