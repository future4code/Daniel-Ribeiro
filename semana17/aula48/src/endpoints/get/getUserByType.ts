import { Request, Response } from 'express'
import select from "../../querys/select"

const getUserByType = async (req: Request, res: Response) =>{
    try {

        const type = req.params.type as string

        if(!type){
            throw new Error('Invalid parameters')
        } 

        const userResult = await select('type', type)

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

export default getUserByType;