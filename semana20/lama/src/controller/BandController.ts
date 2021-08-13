import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";


export class BandController {
    public async registerBand(req: Request, res: Response) {
        try {

            const input: BandInputDTO = {
                band_name: req.body.band_name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }

            const inputToken: string | undefined = req.headers.authorization

            const bandBusiness = new BandBusiness();
            const message = await bandBusiness.createBand(input, inputToken);

            res.status(200).send({ message });

        } catch (error) {
            res.status(400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    public async getDataBand(req: Request, res: Response) {
        try {
            const id = req.params.id
            const token = req.headers.authorization

            const bandBusiness = new BandBusiness()
            const result = await bandBusiness.getDataBand(id, String(token))

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

}