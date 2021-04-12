import { Request, Response } from 'express'
import getData from '../functions/getData'
import getUserInfos from '../querys/gets/getUserInfos'
import { users } from '../tableNames/tableNames'

const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getData(token)

        const user = await getUserInfos(authenticationData.id, 'id', users)

        

        res.status(200).send({ 
            id: user[0].id,
            name: user[0].name,
            email: user[0].email
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
export default getProfile