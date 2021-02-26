import { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../Constants/Urls'
import { goToPosts } from '../Router/Coordinator'


const requestLogin = (body, clear, history) =>{
        axios.post(`${BASE_URL}/login`, body)
        .then((res) =>{
            console.log('token', res.data.token)
            localStorage.setItem('token', res.data.token)
            goToPosts(history)
            clear()
        })
        .catch((err) =>{
            alert('Não foi possível fazer login, tente novamente.')
        })
}
export default requestLogin;
