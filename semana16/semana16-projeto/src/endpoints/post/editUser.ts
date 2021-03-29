import connection from "../../connection"
import { Request, Response } from 'express'

const editUsers = async (
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

        if (!body.name) {
            throw new Error('Invalid name.')
        } else if (!body.nickname) {
            throw new Error('Invalid nickname.')
        } else if (!body.email) {
            throw new Error('Invalid email.')
        } else {
            await connection.raw(`
            UPDATE ToDoListUsers 
            SET name = "${body.name}",
                nickname = "${body.nickname}",
                email = "${body.email}"
            WHERE id = ${req.params.id}
            `);

            res.status(200).send({ message: 'User updated successfully', body })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default editUsers;