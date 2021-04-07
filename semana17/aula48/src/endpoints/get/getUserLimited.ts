import { Request, Response } from 'express'
import selectLimited from "../../querys/selectLimited"

const getUserLimited = async (req: Request, res: Response) => {
    try {

        let page = Number(req.query.page)
        const limit = Number(req.query.limit)
        const offset = limit * (page - 1);

        if (isNaN(Number(page)) || Number(page) < 1) {
            page = 1;
        }

        const userResult = await selectLimited(limit, offset)

        if (userResult.length < 1) {
            throw new Error('No results for your search.')
        } else {
            res.status(200).send(userResult)
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

export default getUserLimited;