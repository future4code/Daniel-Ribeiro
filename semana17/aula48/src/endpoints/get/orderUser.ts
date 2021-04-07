import { Request, Response } from 'express'
import order from '../../querys/order'

const orderUser = async (req: Request, res: Response) =>{
    try {

        const type = req.query.type as string
        const name = req.query.name as string
        let directionOrder = req.query.direction as string || 'ASC'
        let userResult = ""

        if(!type && name){
            console.log('entrou no nome')
            userResult = await order('name', directionOrder)
        } else if(type && !name){
            console.log('entrou no type')
            userResult = await order('type', directionOrder)
        } else {
            console.log('entrou no email')
            userResult = await order('email', directionOrder)
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