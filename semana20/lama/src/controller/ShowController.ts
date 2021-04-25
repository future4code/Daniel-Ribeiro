import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ShowInputDTO } from "../model/Show";


export class ShowController {
    public async register(req: Request, res: Response) {
        try {

            const input: ShowInputDTO = {
                band_id: req.body.band_id,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                week_day: req.body.week_day
            }

            const inputToken = req.headers.authorization as string

            const showBusiness = new ShowBusiness();
            const message = await showBusiness.createShow(input, inputToken);

            res.status(200).send({ message });

        } catch (error) {
            res.status(400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    public async getShowsByDate(req: Request, res: Response) {
        try {
            const week_day = req.query.week_day as string
            const direction = req.query.direction as string
            const inputToken = req.headers.authorization as string

            const showBusiness = new ShowBusiness();
            const result = await showBusiness.getShowsByDay(week_day, inputToken, direction);

            res.status(200).send({ result })
        } catch (error) {
            res.status(400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

}