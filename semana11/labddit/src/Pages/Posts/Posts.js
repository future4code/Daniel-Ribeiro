import React, { useEffect, useState } from 'react';
import CardPost from '../../Components/CardPost/CardPost';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { PostsContainer } from './style'
import { BASE_URL } from '../../Constants/Urls'
import useGetData from '../../Services/useGetData';

function Posts({valueBtnCreatePost, setValueBtnCreatePost}) {
    const [posts] = useGetData([], `${BASE_URL}/posts`)
    const [teste, setTeste] = useState()
    useProtectedPage()
    console.log('posts', posts)

    return (
        <PostsContainer>
            <div className='topMargin'>
                {posts.map((post) => {
                    return (
                        <CardPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            post={post.text}
                            commentsCount={post.commentsCount}
                            votesCount={post.votesCount}
                            createdAt={post.createdAt}
                            username={post.username}
                        />
                    )
                })}
            </div>

        </PostsContainer>
    )
}

export default Posts;