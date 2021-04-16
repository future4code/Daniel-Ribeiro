import connection from '../../connection'

const getUserByEmail = async (tableName: string, email: string) => {
    const user = await connection.raw(`
            SELECT *
            FROM ${tableName}
            WHERE email = "${email}"
        `)
    
    return user[0]
}
export default getUserByEmail