import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

function Post(){
    useProtectedPage()
    return(
        <div>
            <h1>Page Post</h1>
        </div>
    )
}

export default Post;