import { IdGenerator } from "../services/IdGenerator";
import { ShowDatabase } from "../data/ShowDataBase";
import { ShowInputDTO } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";
import { BandDatabase } from "../data/BandDataBase";

export class ShowBusiness {

    public async createShow(show: ShowInputDTO, token: string) {
        try {
            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const authenticationData = new Authenticator()
            const data = authenticationData.getData(String(token))

            if (data.role !== UserRole.ADMIN) throw new Error('Only ADMIN can use this functionality')

            if(!show.band_id) throw new Error('Invalid band_id')
            if(!show.end_time || Number(show.end_time) > 23) throw new Error('Invalid end_time')
            if(!show.start_time || Number(show.start_time) < 8) throw new Error('Invlaid start_time')
            if(!show.week_day) throw new Error('Invalid week_day')

            let day = show.week_day.toLowerCase()

            if(day === "sabado") {
               day = "sábado" 
            }

            

            const bandDataBase = new BandDatabase()
            const band = await bandDataBase.getBandByNameOrId(show.band_id, "id")
            console.log(band.length)
            if(band.length > 0) throw new Error('This show already exist')

            const showDatabase = new ShowDatabase();
            await showDatabase.createShow({
                id,
                week_day: day,
                start_time: show.start_time,
                end_time: show.end_time,
                band_id: show.band_id
            });

            return {
                message: "Insert show successfully"
            }
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getShowsByDay(week_day: string, token: string, direction: string) {
        try {
            const authenticationData = new Authenticator();
            const data = authenticationData.getData(String(token));

            if (data.role !== UserRole.ADMIN) throw new Error('Only ADMIN can use this functionality');

            let day = week_day.toLowerCase()

            if(day === "sabado") {
               day = "sábado" 
            }

            if (!day) throw new Error('Invalid date');
            if (day !== 'sexta' && day !== 'sábado' && day !== 'domingo') {
                throw new Error('This date is not supported')
            };

            const showDatabase = new ShowDatabase();
            const result = await showDatabase.getShowsByDay(day, direction);
            
            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

}