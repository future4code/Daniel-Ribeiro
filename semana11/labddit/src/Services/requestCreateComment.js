import axios from 'axios';
import {BASE_URL} from '../Constants/Urls';

const requestCreateCommit = (body, id, requestCommits, clear) =>{
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) =>{
        console.log(res)
        alert('Comentado com sucesso.')
        requestCommits()
        clear()
    })
    .catch((err) =>{
        alert('Não foi possível comentar.')
    })
}

export default requestCreateCommit;
