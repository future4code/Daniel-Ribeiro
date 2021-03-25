import connection from "../../../connection"
import { Request, Response } from 'express'

const getBygender = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) AS Count
            FROM Actor
            GROUP BY gender
       `)

        res.send(result[0])

    } catch (error) {
        console.log("deu ruim")
        res.status(500).send("deu ruim")
    }
}

export default getBygender;