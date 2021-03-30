import connection from '../connection'

const selectEx4 = async ( 
        typeOrName: string, 
        typeOrNameUser: string,
        direction: string,
        limit: number,
        offset: number
    ) => {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE ${typeOrName.toLowerCase()} = "${typeOrNameUser.toLowerCase()}"
        ORDER BY ${typeOrName} ${direction}
        LIMIT ${limit}
        OFFSET ${offset};
    `)

    return result[0]
}

export default selectEx4;