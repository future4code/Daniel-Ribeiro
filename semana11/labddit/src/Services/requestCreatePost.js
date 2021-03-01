import axios from 'axios';
import {BASE_URL} from '../Constants/Urls';

const requestCreatePost = (body, clear) =>{
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) =>{
        console.log(res)
        alert('Post criado com sucesso!')
        clear()
    })
    .catch((err) =>{
        console.log('Não foi possível criar o post!')
    })
}

export default requestCreatePost;