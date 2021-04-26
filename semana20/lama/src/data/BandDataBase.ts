import { BaseDatabase } from "./BaseDatabase";
import { InterfaceBand } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "BAND_TABLE_LAMA";

  public async createBand(input: InterfaceBand): Promise<void> {
    try {
      await this.getConnection().raw(
        `INSERT INTO ${BandDatabase.TABLE_NAME} (id, band_name, music_genre, responsible)
          VALUES(
            "${input.id}",
            "${input.band_name}",
            "${input.music_genre}",
            "${input.responsible}"
          )`
      )
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getDataBand(id: string): Promise<any> {
    try {
      const result = await this.getConnection().raw(`
        SELECT *
        FROM BAND_TABLE_LAMA
        JOIN SHOW_TABLE_LAMA
        ON BAND_TABLE_LAMA.id = SHOW_TABLE_LAMA.band_id
        WHERE BAND_TABLE_LAMA.id = "${id}"
      `)

      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByNameOrId(input: string, type: string) {
    try {
      const result = await this.getConnection().raw(`
        SELECT *
        FROM BAND_TABLE_LAMA
        WHERE BAND_TABLE_LAMA.${type} = "${input}"
      `)

      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
