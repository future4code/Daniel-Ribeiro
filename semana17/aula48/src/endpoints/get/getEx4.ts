import { Request, Response } from 'express'
import order from '../../querys/order'
import selectEx4 from '../../querys/selectEx4'

const orderUser = async (req: Request, res: Response) =>{
    try {

        const type = req.query.type as string
        const name = req.query.name as string
        let directionOrder = req.query.direction as string || 'ASC'
        let limit = Number(req.query.limit)
        let page = Number(req.query.page)
        let offset = limit * (page -1)
        let userResult = ""

        if (isNaN(Number(page)) || Number(page) < 1) {
            page = 1;
        }

        if(!type && name){
            console.log('entrou no nome')
            userResult = await selectEx4('name', name, directionOrder, limit, offset)
        } else if(type && !name){
            console.log('entrou no type')
            userResult = await selectEx4('type', type, directionOrder, limit, offset)
        } else {
            console.log('entrou no email')
            userResult = await selectEx4('email', 'email', directionOrder, limit, offset)
        }

        if(userResult.length < 1){
            throw new Error('No results for your search.')
        } else {
            res.status(200).send(userResult)
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

export default orderUser;