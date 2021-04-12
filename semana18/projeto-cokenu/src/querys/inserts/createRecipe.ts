import connection from '../../connection'
import { recipe } from '../../types/types'

const createRecipe = async (recipe: recipe, tableName: string) =>{
    try {
        await connection.raw(`
            INSERT INTO ${tableName} (id, title, description, createdAt, user_id)
                VALUES(
                    "${recipe.id}",
                    "${recipe.title}",
                    "${recipe.description}",
                    "${recipe.createdAt}",
                    "${recipe.user_id}"
                )
        `)
    } catch (error) {
        throw new Error(error.message)
    }
}
export default createRecipe