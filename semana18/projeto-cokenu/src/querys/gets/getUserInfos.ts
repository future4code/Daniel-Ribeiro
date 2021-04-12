import connection from '../../connection'

const getUserInfos = async (value: string, condition:string, tableName: string) =>{
    try {
        const user = await connection.raw(`
            SELECT * 
            FROM ${tableName}
            WHERE ${condition} = "${value}"
        `)

        return user[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
export default getUserInfos