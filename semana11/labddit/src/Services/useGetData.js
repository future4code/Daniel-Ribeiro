import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = (initialState, endpoint) =>{

    const [posts, setPosts] = useState(initialState)

    useEffect(() =>{
        getPosts(endpoint)
    }, [endpoint])

        const getPosts = (endpoint) =>{
            axios.get(endpoint, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) =>{
                console.log(res.data.posts)
                setPosts(res.data.posts)
            })
            .catch((err) =>{
                alert('Não deu para pegar os posts')
            })
        } 
        
    return [posts]
}
export default useGetData;

