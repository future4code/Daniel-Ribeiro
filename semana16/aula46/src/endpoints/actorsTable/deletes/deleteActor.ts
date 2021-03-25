import connection from "../../../connection"
import { Request, Response } from 'express'

const deleteActor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        if(!req.params.id){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection("Actor")
            .delete()
            .where({id: req.params.id});
    
            res.status(201).send('Actor deleted successfully')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default deleteActor;