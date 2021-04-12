import { Request, Response } from 'express'
import { convertDate } from '../functions/convertDate'
import getUserInfos from '../querys/gets/getUserInfos'
import { recipes } from '../tableNames/tableNames'

const getRecipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        if(!id) throw new Error('Ivalid id.')
        if(!token) throw new Error('Invalid token.')

        const recipe = await getUserInfos(id, 'id', recipes)

        if(recipe.length < 1) throw new Error('Recipe dont exist.')

        const data = convertDate(Number(recipe[0].createdAt))

        res.status(200).send({ 
            id: recipe[0].id,
            name: recipe[0].name,
            description: recipe[0].description,
            createdAt: data
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
export default getRecipe