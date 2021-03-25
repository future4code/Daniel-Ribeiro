import connection from "../../../connection"
import { Request, Response } from 'express'

const createMovie = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        type movie = {
            nome: string,
            sinopse: string,
            lancamento: string,
            avaliacao: number,
            cartaz: Date
        }

        const body: movie = {
            nome: req.body.nome,
            sinopse: req.body.sinopse,
            lancamento: req.body.lancamento,
            avaliacao: req.body.avaliacao,
            cartaz: req.body.cartaz
        }

        if(!body.nome || !body.sinopse || !body.lancamento || !body.avaliacao || !body.cartaz){
            res.status(422).send('Invalid Parameters.')
        } else {
            await connection.insert({
                nome: body.nome,
                sinopse: body.sinopse,
                lancamento: body.lancamento,
                avaliacao: body.avaliacao,
                playing_limit_date: body.cartaz
            })
            .into("Movies");
    
            res.status(201).send({message: 'Actor created successfully', body})
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};
export default createMovie;