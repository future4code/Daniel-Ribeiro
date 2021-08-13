import { BaseDatabase } from "./BaseDatabase";
import { InterfaceShow } from "../model/Show";

export class ShowDatabase extends BaseDatabase {

  private static TABLE_NAME = "SHOW_TABLE_LAMA";

  public async createShow(input: InterfaceShow): Promise<void> {
    try {
      await this.getConnection().raw(`
        INSERT INTO ${ShowDatabase.TABLE_NAME} (id, week_day, start_time, end_time, band_id)
          VALUES(
            "${input.id}",
            "${input.week_day}",
            "${input.start_time}",
            "${input.end_time}",
            "${input.band_id}"
          )
      `)
        
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getShowsByDay(week_day: string, direction: string) {
    try {
      const result = await this.getConnection().raw(`
        SELECT B.band_name, B.music_genre
        FROM SHOW_TABLE_LAMA S
        JOIN BAND_TABLE_LAMA B
        ON B.id = S.band_id
        WHERE week_day = "${week_day}"
        ORDER BY start_time ${direction};
      `)

      return result[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
