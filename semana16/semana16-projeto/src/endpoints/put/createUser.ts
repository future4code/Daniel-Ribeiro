import connection from "../../connection"
import { Request, Response } from 'express'

const createActor = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type user = {
            name: string,
            nickname: string,
            email: string,
        }

        const body: user = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
        }

        if(!body.name){
            throw new Error('Invalid name.')
        } else if(!body.nickname){
            throw new Error('Invalid nickname.')
        } else if(!body.email){
            throw new Error('Invalid email.')
        } else {
            await connection.raw(`
            INSERT INTO ToDoListUsers (name, nickname, email)
            VALUES(
                "${body.name}",
                "${body.nickname}",
                "${body.email}"
            );
            `);

            res.status(201).send({message: 'User created successfully', body})
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default createActor;