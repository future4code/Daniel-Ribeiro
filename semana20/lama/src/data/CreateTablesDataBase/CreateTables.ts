import { BaseDatabase } from "../BaseDatabase";

export class CreateTables extends BaseDatabase {

    private static BAND_TABLE = "BAND_TABLE_LAMA";
    private static SHOW_TABLE = "SHOW_TABLE_LAMA";
    private static USER_TABLE = "USER_TABLE_LAMA";

    public async createBandTable(): Promise<void> {
        try {
            await this.getConnection().raw(
                `CREATE TABLE IF NOT EXISTS ${CreateTables.BAND_TABLE} (
                    id VARCHAR(255) PRIMARY KEY,
                    band_name VARCHAR(255) UNIQUE NOT NULL,
                    music_genre VARCHAR(255) NOT NULL,
                    responsible VARCHAR(255) UNIQUE NOT NULL 
                );`
            )

            console.log(`${CreateTables.BAND_TABLE} was created successfully`)
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async createShowTable(): Promise<void> {
        try {
            await this.getConnection().raw(
                `CREATE TABLE IF NOT EXISTS ${CreateTables.SHOW_TABLE} (
                    id VARCHAR(255) PRIMARY KEY,
                    week_day VARCHAR(255) NOT NULL,
                    start_time INT NOT NULL,
                    end_time INT NOT NULL,
                    band_id VARCHAR(255) NOT NULL,
                    FOREIGN KEY(band_id) REFERENCES ${CreateTables.BAND_TABLE}(id)
                );`
            )

            console.log("SHOW_TABLE_LAMA was created successfully")
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async createUserTable(): Promise<void> {
        try {
            await this.getConnection().raw(
                `CREATE TABLE IF NOT EXISTS ${CreateTables.USER_TABLE} (
                    id VARCHAR(255) PRIMARY KEY,
                    user_name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
                );`
            )

            console.log("USER_TABLE_LAMA was created successfully")
            BaseDatabase.destroyConnection()
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
}

const createTables = new CreateTables
createTables.createBandTable()
createTables.createShowTable()
createTables.createUserTable()

