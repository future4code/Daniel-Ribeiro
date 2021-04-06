import { Request, Response } from 'express'
import getData from '../../functions/getData';
import getUserInfos from '../../querys/selects/getUserInfos'
import { users } from '../../services/tableNames'

const getInfoUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        if(!token) throw new Error('Invalid token.')

        const authenticationData = getData(token)
        
        if(authenticationData.type === 'ADMIM') throw new Error('Unauthorized')
        
        const user = await getUserInfos(users, authenticationData.id)
        
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
export default getInfoUser