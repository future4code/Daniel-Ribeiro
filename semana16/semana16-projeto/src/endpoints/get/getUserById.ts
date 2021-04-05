import connection from "../../connection"
import { Request, Response } from 'express'

const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const user = await connection("ToDoListUsers")
        .where({id: req.params.id})
        res.send(user)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
}
export default getUserById;