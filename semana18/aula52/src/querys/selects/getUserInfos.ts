import connection from '../../connection'

const getUserInfos = async (tableName: string, id: string) =>{
    const result = await connection.raw(`
        SELECT *
        FROM ${tableName}
        WHERE id = "${id}"
    `)

    return result[0]
}
export default getUserInfos