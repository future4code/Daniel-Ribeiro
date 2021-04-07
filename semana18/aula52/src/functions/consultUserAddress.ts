import axios from 'axios'
import {BASE_URL_VIACEP} from '../baseUrls/baseUrls'

export const consultUserAddress = async (userCep: string) =>{
    try {
        const response = await axios.get(`${BASE_URL_VIACEP}/${userCep}/json`)

        return  response
    } catch (error) {
        console.log(error.message)
        return null
    }
}
export default consultUserAddress