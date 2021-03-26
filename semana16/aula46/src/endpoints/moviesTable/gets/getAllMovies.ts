import connection from "../../../connection"
import { Request, Response } from 'express'

const getAllMovies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const movies = await connection("Movies")
            .limit(15)

        res.send(movies)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
}

export default getAllMovies;