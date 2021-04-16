import connection from '../../connection'
import { user } from '../../types/types'

const insertIntoUser = async (user: user, tableName: string) => {
        await connection.raw(`
        INSERT INTO ${tableName} (id, email, password, user_name, nickname, type)
        VALUES(
            "${user.id}",
            "${user.email}",
            "${user.password}",
            "${user.userName}",
            "${user.nickname}",
            "${user.type}"
        );
    `)
}
export default insertIntoUser