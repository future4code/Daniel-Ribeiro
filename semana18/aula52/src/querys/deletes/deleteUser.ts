import connection from '../../connection'

const deleteUser = async (tableName: string, id: string) =>{
    await connection.raw(`
        DELETE 
        FROM ${tableName}
        WHERE id = "${id}"
    `)
}
export default deleteUser