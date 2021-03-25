import connection from "../../../connection"
import { Request, Response } from 'express'

const getMovieByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let nameMovie: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Movies
           WHERE nome LIKE "%${nameMovie}%" OR sinopse LIKE "%${nameMovie}%" 
       `)
 
       res.send(result[0])
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getMovieByName;