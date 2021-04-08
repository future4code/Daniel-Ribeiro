import { Request, Response } from 'express'
import consultUserAddress from '../../functions/consultUserAddress'
import getData from '../../functions/getData'
import { generateId } from '../../functions/getId'
import inserUserAddress from '../../querys/inserts/insertUserAddress'
import getUserInfos from '../../querys/selects/getUserInfos'
import { addressUser, users } from '../../services/tableNames'
import { Address } from '../../types/types'

const getUserAddress = async (req: Request, res: Response): Promise<void> => {
    try {
        const cep = req.body.cep
        const numeroCasa = req.body.numero_casa
        const token =  req.headers.authorization as string;
        const response = await consultUserAddress(cep)
        const id = generateId()

        const authenticationData = getData(token) 

        const user = await getUserInfos(users, authenticationData.id)
        
        console.log(response?.data)
        console.log(user)

        const userAddress: Address = {
            id,
            cep: cep,
            logradouro: response?.data.logradouro,
            numero_casa: numeroCasa,
            complemento: response?.data.complemento,
            bairro: response?.data.bairro,
            cidade: response?.data.localidade,
            uf: response?.data.uf,
            user_id: user[0].id
        }

        await inserUserAddress(userAddress, addressUser)

        res.send({
            message: 'User Address updated successfully', 
            userAddress: response?.data, 
            user: {
                id: user[0].id,
                email: user[0].email,
                cep: userAddress.cep,
                logradouro: userAddress.logradouro,
                numeroCasa: userAddress.numero_casa,
                bairro: userAddress.bairro,
                cidade: userAddress.cidade
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}
export default getUserAddress