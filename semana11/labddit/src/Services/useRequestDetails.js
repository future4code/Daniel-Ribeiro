import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../Constants/Urls';

function useRequestDetails(id) {
    const [data, setData] = useState()

    useEffect(() => {
        getDetails(id)
    }, [id])

    const getDetails = (id) => {
        axios.get(`${BASE_URL}/posts/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data.post)
            console.log('requisião detalhe')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    return [data]
}


export default useRequestDetails;