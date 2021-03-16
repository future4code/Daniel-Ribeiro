import React from 'styled-components'
import CardCreatePost from '../../Components/CardCreatePost/CardCreatePost';
import useProtectedPage from '../../Hooks/useProtectedPage'

function CreatePost(){
    useProtectedPage()
    return(
        <CardCreatePost />
    )
}
export default CreatePost;