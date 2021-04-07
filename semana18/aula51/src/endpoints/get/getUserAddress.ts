import { Request, Response } from 'express'
import consultUserAddress from '../../functions/consultUserAddress'

const getUserAddress = async (req: Request, res: Response): Promise<void> => {
    try {
        const cep = req.body.cep
        const response = await consultUserAddress(cep)

        res.send({ userAddress: response?.data })
    } catch (error) {
        console.log(error.message)
    }
}
export default getUserAddress