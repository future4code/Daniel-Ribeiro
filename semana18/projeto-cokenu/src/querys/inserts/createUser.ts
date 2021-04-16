import connection from '../../connection'
import { user } from '../../types/types'

const createUser = async (user: user, tableName: string) =>{
    try {
        await connection.raw(`
            INSERT INTO ${tableName} (id, name, email, password)
            VALUES(
                "${user.id}",
                "${user.name}",
                "${user.email}",
                "${user.password}"
            )
        `)
    } catch (error) {
        console.log(error.message)
    }
}
export default createUser