import connection from '../connection'

const selectLimited = async (a: number, b: number) => {
    const result = await connection.raw(`
        SELECT * 
        FROM aula48_exercicio
        LIMIT ${a}
        OFFSET ${b}
    `)

    return result[0]
}

export default selectLimited;