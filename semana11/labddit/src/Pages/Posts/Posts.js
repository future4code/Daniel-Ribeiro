import React, { useEffect } from 'react';
import CardPost from '../../Components/CardPost/CardPost';
import useProtectedPage from '../../Hooks/useProtectedPage';
import useGetPost from '../../Services/getPosts';
import { PostsContainer } from './style'

function Posts() {
    const [posts] = useGetPost()
    useProtectedPage()

    return (
        <PostsContainer>
            <h1>Page Posts</h1>
            {posts.map((post) =>{
                return(
                    <CardPost 
                        title={post.title}
                        post={post.text}
                    />
                )
            })}
        </PostsContainer>
    )
}

export default Posts;