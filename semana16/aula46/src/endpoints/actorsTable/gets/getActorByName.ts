import connection from "../../../connection"
import { Request, Response } from 'express'

const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let userName: string = req.query.name as string
        const result = await connection.raw(`
           SELECT * FROM Actor
           WHERE name = "${userName}"  
       `)
 
       res.send(result[0])
 
       /* const actor = await connection("Actor")
       .where({
        id: req.params.id
     }) */
 
       /* res.send(actor) */
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getActorByName;