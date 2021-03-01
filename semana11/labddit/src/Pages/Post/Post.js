import React, { useCallback, useEffect, useState } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { useParams } from 'react-router-dom';
import useRequestDetails from '../../Services/useRequestDetails';
import CreateComment from '../../Components/CreateComment/CreateComment';
import {PostDetailContainer, CardPostDetail, Title, PostContent, CardComment, InfoComment, TextComment} from './style'
import axios from 'axios';
import { BASE_URL } from '../../Constants/Urls';



function Post(){
    useProtectedPage()

    const {id} = useParams()

    const[commentsData, setComments] = useState()
    const datePost = new Date(commentsData && commentsData.createdAt)

    const requestCommits = () =>{
        axios.get(`${BASE_URL}/posts/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) =>{
            setComments(res.data.post)
            console.log('comentários request', res.data.post)
        })
        .catch((err) =>{
            console.log('Não foi possível pegar os comentários')
        })
    }

    useEffect(() =>{
        requestCommits()
    }, [])
    
    const comments = commentsData && commentsData.comments.map((post) =>{
        let date = new Date(post.createdAt);
        return(
            <CardComment key={post.id}>
                <InfoComment>
                    <p>{post.username[0].toUpperCase() + post.username.substr(1)} comentou em {date.toLocaleDateString("pt-BR")} - {date.toLocaleTimeString()}</p>
                </InfoComment>
                <TextComment>{post.text}</TextComment>
            </CardComment>
        )
    })

    return(
        <PostDetailContainer>
            <CardPostDetail>
                <div className='time-and-username-container'>
                    <p>{commentsData && commentsData.username[0].toUpperCase() + commentsData.username.substr(1)}</p>
                    <p>{datePost.toLocaleDateString()} - {datePost.toLocaleTimeString()}</p>
                </div>
                <Title>{commentsData && commentsData.title}</Title>
                <PostContent>{commentsData && commentsData.text}</PostContent>
            </CardPostDetail>
            
            <CreateComment 
                id={id}
                requestCommits={requestCommits}
            />
            <h2>Comentários</h2>
        
            {comments}
        </PostDetailContainer>
    )
}

export default Post;