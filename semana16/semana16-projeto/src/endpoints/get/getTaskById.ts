import connection from "../../connection"
import { Request, Response } from 'express'

const getTaskById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let errorCode = 400

        type task = {
            id: number,
            title: string,
            description: string,
            limit_date: string,
            status: string,
            creator_user_id: number,
            nickname: string
        }

        const tasks: task[] = await connection("TodoListTask")
            .where({
                id: req.params.id,
            });

        if (tasks.length < 1) {
            errorCode = 404;
            throw new Error(`Task id ${req.params.id} not found.`);
        } else {
            const tasksJoin = await connection.raw(`
            SELECT t.id, t.title, t.description, t.limit_date, t.status, t.creator_user_id, u.nickname
            FROM ToDoListUsers u
            JOIN TodoListTask t
            ON u.id = t.creator_user_id
            WHERE t.id = ${req.params.id}; 
        `)

            function adicionaZero(numero: number) {
                if (numero <= 9)
                    return "0" + numero;
                else
                    return numero;
            }

            let data = new Date(tasksJoin[0][0].limit_date.toString());
            let dataFormatada = (adicionaZero((data.getDate()))) + "/" + (adicionaZero((data.getMonth() + 1))) + "/" + data.getFullYear();
            console.log(dataFormatada);

            res.status(200).send({
                taskId: tasksJoin[0][0].id,
                description: tasksJoin[0][0].description,
                limitDate: dataFormatada,
                status: tasksJoin[0][0].status,
                creatorUserId: tasksJoin[0][0].creator_user_id,
                creatorUserNickname: tasksJoin[0][0].nickname,
            })
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
}
export default getTaskById;