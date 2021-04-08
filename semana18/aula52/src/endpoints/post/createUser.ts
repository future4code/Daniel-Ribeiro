import { Request, Response } from 'express'
import { addressUser, users } from '../../services/tableNames'
import { generateId } from '../../functions/getId'
import generateToken from '../../functions/generateToken'
import getUserByEmail from '../../querys/selects/getUserByEmail'
import insertIntoUser from '../../querys/inserts/insertIntoUser'
import generateHash from '../../functions/generateHash'
import { Address, user } from '../../types/types'
import inserUserAddress from '../../querys/inserts/insertUserAddress'
import consultUserAddress from '../../functions/consultUserAddress'

const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.user_name || 
            !req.body.nickname || 
            !req.body.type || 
            !req.body.cep || 
            !req.body.numero_casa || 
            !req.body.complemento) {
            throw new Error('Invalid paramters.')
        }

        if (!req.body.email || !req.body.email.includes('@')) throw new Error('Invalid email.')
        if (!req.body.password || req.body.password.length < 6) throw new Error('Invalid password. It needs be longer than 5 digits.')

        const idUser = generateId()
        const idAddress = generateId()
        const cep = req.body.cep
        const cypherPassword = await generateHash(req.body.password)
        let typeUser = ''

        if(String(req.body.type).toUpperCase() !== 'ADMIM' && String(req.body.type).toUpperCase() !== 'NORMAL'){
            throw new Error("Invalid type, it must be 'ADMIM' or 'NORMAL'")
        }

        if(String(req.body.type).toUpperCase() === 'ADMIM'){
            typeUser = 'ADMIM'
        }

        if(String(req.body.type).toUpperCase() === 'NORMAL'){
            typeUser = 'NORMAL'
        }

        const user = await getUserByEmail(users, req.body.email)
       
        if (user.length > 0) {
            throw new Error('User already exist.')
        }

        const userBody: user = {
            id: idUser,
            email: req.body.email,
            password: cypherPassword,
            userName: req.body.user_name,
            nickname: req.body.nickname,
            type: req.body.type,
            cep: req.body.cep,
            numeroCasa: req.body.numero_casa,
            complemento: req.body.complemento
        }

        const token = generateToken({ id: idUser, type: typeUser })
        const responseAddress = await consultUserAddress(cep)

        const userAddress: Address = {
            id: idAddress,
            cep: cep,
            logradouro: responseAddress?.data.logradouro,
            numero_casa: userBody.numeroCasa,
            complemento: responseAddress?.data.complemento,
            bairro: responseAddress?.data.bairro,
            cidade: responseAddress?.data.localidade,
            uf: responseAddress?.data.uf,
            user_id: idUser
        }

        await insertIntoUser(userBody, users)
        await inserUserAddress(userAddress, addressUser)

        res.status(200).send({
            message: 'User created successfully.',
            user: {
                idUser,
                idAddress,
                email: userBody.email,
                user_name: userBody.userName,
                nickname: userBody.nickname,
                type: typeUser,
                logradouro: userAddress.logradouro,
                numeroCasa: userAddress.numero_casa
            },
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).send({ message: error.message })
    }
}
export default createUser