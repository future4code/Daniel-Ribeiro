import { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../Constants/Urls'


const useGetPost = () =>{

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        getPosts()
    },[])

        const getPosts = () =>{
            axios.get(`${BASE_URL}/posts`, {
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
export default useGetPost;

