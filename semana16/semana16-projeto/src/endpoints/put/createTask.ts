import connection from "../../connection"
import { Request, Response } from 'express'

const createTask = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type user = {
            title: string,
            description: string,
            limitDate: string,
            status: string,
            creatorUserId: number
        }

        const body: user = {
            title: req.body.title,
            description: req.body.description,
            limitDate: req.body.limitDate,
            status: req.body.status,
            creatorUserId: req.body.creatorUserId
        }

        const date = body.limitDate;
        const newDate = date.split('/').reverse().join('/');
        console.log(newDate);

        if (!body.title) {
            throw new Error('Invalid title.')
        } else if (!body.description) {
            throw new Error('Invalid description.')
        } else if (!body.limitDate) {
            throw new Error('Invalid limitDate.')
        } else if (!body.status) {
            throw new Error('Invalid status.')
        } else if (!body.creatorUserId) {
            throw new Error('Invalid creatorUserId.')
        } else {
            await connection.raw(`
            INSERT INTO TodoListTask (title, description, limit_date, status, creator_user_id)
            VALUES(
                "${body.title}",
                "${body.description}",
                "${newDate}",
                "${body.status}",
                "${body.creatorUserId}"
            );
            `);

            res.status(201).send({ message: 'Task created successfully', task: body })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default createTask;