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

        await connection.raw(`
            CREATE TABLE AddressUser (
                id VARCHAR(255) PRIMARY KEY, 
                cep VARCHAR(255) NOT NULL, 
                logradouro VARCHAR(255) NOT NULL, 
                complemento VARCHAR(255) NULL,
                barril VARCHAR(255) NOT NULL,
                cidade VARCHAR(255) NOT NULL,
                uf VARCHAR(255) NOT NULL,
                user_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES User(id)
            );
        `)
        console.log('Tabelas criadas com sucesso!!')
    } catch (error) {
        console.log(error.message)
    }
}
createTables()