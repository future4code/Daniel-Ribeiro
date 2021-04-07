import connection from '../../connection'

const createTables = async () =>{
    try {
        await connection.raw(`
            CREATE TABLE User (
                id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                user_name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) NOT NULL
            );
        `)
        console.log('Tabelas criadas com sucesso!!')
    } catch (error) {
        console.log(error.message)
    }
}
createTables()