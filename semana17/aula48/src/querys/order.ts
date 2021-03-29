import connection from './../connection'

const order = async (a: string, b: string) =>{
    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        ORDER BY UPPER(${a}) ${b};
    `)

    return result[0]
}

export default order;