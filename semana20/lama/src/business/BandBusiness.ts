import { IdGenerator } from "../services/IdGenerator";
import { BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDataBase";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";

export class BandBusiness {

    public async createBand(band: BandInputDTO, token: string | undefined) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const inputToken = token

        if(!inputToken) throw new Error('Invalid Token')
        
        const authenticationData = new Authenticator()
        const data = authenticationData.getData(String(token))

        if(data.role !== UserRole.ADMIN) throw new Error('Only ADMIN can register Band')
        
        if(!band.band_name) throw new Error('Invalid name')
        if(!band.music_genre) throw new Error('Invalid music_genre')
        if(!band.responsible) throw new Error('Invalid responsible')

        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand({
            id, 
            band_name: band.band_name, 
            music_genre: band.music_genre, 
            responsible: band.responsible
        });

        return {
            message: "Insert band successfully"
        }
    }

    public async getDataBand(id: string, token: string) {
        if(!id) throw new Error('Invalid id or band name')
        if(!token) throw new Error('Invalid token')
        
        const authenticationData = new Authenticator()
        const data = authenticationData.getData(String(token))

        if(data.role !== UserRole.ADMIN) throw new Error('Only ADMIN can use this functionality')

        const bandDatabase = new BandDatabase()
        const result = await bandDatabase.getDataBand(id)

        return result
    }

}