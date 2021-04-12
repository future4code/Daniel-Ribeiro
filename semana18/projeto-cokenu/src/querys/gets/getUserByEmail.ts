import connection from '../../connection'

const getUserByEmail = async (email: string, tableName: string) =>{
    try {
        const user = await connection.raw(`
            SELECT * 
            FROM ${tableName}
            WHERE email = "${email}"
        `)

        return user[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export default getUserByEmail