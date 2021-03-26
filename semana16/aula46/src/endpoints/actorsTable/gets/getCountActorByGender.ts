import connection from "../../../connection"
import { Request, Response } from 'express'

const getActorByName = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
        let aliasCount: string = ""
        if(req.query.gender === "male"){
            aliasCount = "Count male"
        } else if(req.query.gender === "female"){
            aliasCount = "Count female"
        } else {
            res.status(422).send('O parâmetro informado não é válido.')
        }

        let userGender: string = req.query.gender as string
        const result = await connection.raw(`
           SELECT COUNT(*) AS "${aliasCount}" FROM Actor
           WHERE gender = "${userGender}"  
       `)
 
       res.status(200).send(result[0])
 
    } catch (error) {
       console.log("deu ruim by name")
       res.status(500).send("deu ruim by name")
    }
 }
 
 export default getActorByName;