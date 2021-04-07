import { Request, Response } from 'express'
import select from "../../querys/select"

const getUserByName = async (req: Request, res: Response) =>{
    try {

        const name = req.query.name as string

        if(!name){
            throw new Error('Invalid parameters')
        } 

        const userResult = await select('name', name)

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

export default getUserByName;