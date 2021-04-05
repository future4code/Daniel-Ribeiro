import connection from "../../connection"
import { Request, Response } from 'express'

const getUsers = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      
      const users = await connection("ToDoListUsers")
      if(users.length > 0){
         res.status(200).send(users)
      } else {
         throw new Error('No results for this search.')
      }
      
   } catch (error) {
      console.log(error.message)
      res.status(500).send({message: error.message})
   }
}
export default getUsers;