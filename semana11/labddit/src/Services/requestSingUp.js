import axios from 'axios'
import {BASE_URL} from '../Constants/Urls'
import { goToPosts } from '../Router/Coordinator'


const requestSingUp = (body, clear, history) =>{
        axios.post(`${BASE_URL}/signup`, body)
        .then((res) =>{
            localStorage.setItem('token', res.data.token)
            console.log('token register', res.data.token)
            goToPosts(history)
            clear()
        })
        .catch((err) =>{
            alert('Não foi possível fazer o cadastro, tente novamente.')
        })
}
export default requestSingUp;