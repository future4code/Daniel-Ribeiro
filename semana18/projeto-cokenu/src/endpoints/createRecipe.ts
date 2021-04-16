import { Request, Response } from 'express'
import { generateId } from '../functions/generateId'
import getData from '../functions/getData'
import getUserInfos from '../querys/gets/getUserInfos'
import createRecipe from '../querys/inserts/createRecipe'
import { recipes, users } from '../tableNames/tableNames'
import { recipe } from '../types/types'

const createRepcipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = generateId()
        const authenticationData = getData(token)

        if (!req.body.title || !req.body.description) throw new Error('Please fill the filds.')

        if (!token) throw new Error('Invalid token')

        const body: recipe = {
            id,
            title: req.body.title,
            description: req.body.description,
            createdAt: String(Date.now()),
            user_id: authenticationData.id
        }

        const user = await getUserInfos(authenticationData.id, 'id', users)

        if (user.length < 1) throw new Error('User dont exist.')

        await createRecipe(body, recipes)

        res.status(201).send({
            message: 'Recipe created successfully',
            recipe: {
                id,
                title: body.title,
                description: body.description,
                createdAt: body.createdAt,
                user_id: body.user_id
            }
        })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
export default createRepcipe