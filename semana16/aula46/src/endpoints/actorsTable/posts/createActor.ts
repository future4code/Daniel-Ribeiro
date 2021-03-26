import connection from "../../../connection"
import { Request, Response } from 'express'

const createActor = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type actor = {
            name: string,
            salary: number,
            birthDate: string,
            gender: string
        }

        const body: actor = {
            name: req.body.name,
            salary: req.body.salary,
            birthDate: req.body.birthDate,
            gender: req.body.gender
        }

        if(!body.name || !body.salary || !body.birthDate || !body.gender){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection.insert({
                name: body.name,
                salary: body.salary,
                birth_date: body.birthDate,
                gender: body.gender
            })
            .into("Actor");
    
            res.status(201).send({message: 'Actor created successfully', body})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default createActor;