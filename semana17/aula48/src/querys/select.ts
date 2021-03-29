import connection from '../connection'

const select = async (a: string, b: string) => {
    const result = await connection.raw(`
        SELECT * 
        FROM aula48_exercicio
        WHERE UPPER(${a}) = "${b.toUpperCase()}"
    `)

    return result[0]
}

export default select;