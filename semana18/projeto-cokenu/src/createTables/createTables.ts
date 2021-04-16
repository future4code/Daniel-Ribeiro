import connection from '../connection'

const createTables = async () =>{

    try {
        await connection.raw(`
        CREATE TABLE Cokenu_User (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
    `)

    await connection.raw(`
        CREATE TABLE User_Recipe (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            createdAt VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY(user_id) REFERENCES Cokenu_User(id) 
        );
    `)
    console.log('Tables created successfully.')
    } catch (error) {
        throw new Error('The tables could not be created')
    }
}

createTables()