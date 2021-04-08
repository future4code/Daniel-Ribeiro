import connection from '../../connection'
import { Address } from '../../types/types'

const inserUserAddress = async (user: Address, tableName: string) => {
        await connection.raw(`
        INSERT INTO ${tableName} (id, cep, logradouro, complemento, bairro, cidade, uf, user_id, numero)
        VALUES(
            "${user.id}",
            "${user.cep}",
            "${user.logradouro}",
            "${user.complemento}",
            "${user.bairro}",
            "${user.cidade}",
            "${user.uf}",
            "${user.user_id}",
            "${user.numero_casa}"
        );
    `)
}
export default inserUserAddress