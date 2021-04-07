import { Request, Response } from 'express'
import getUserInfos from '../../querys/selects/getUserInfos'
import { users } from '../../services/tableNames'

const getInfoUserNoAuth = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id

        if(!id) throw new Error('Invalid id.')
        
        const user = await getUserInfos(users, id)
        
        if(user.length < 1) throw new Error('User dont exist.')

        res.send({
            userInfo: {
                id: user[0].id,
                email: user[0].email
            }
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
export default getInfoUserNoAuth