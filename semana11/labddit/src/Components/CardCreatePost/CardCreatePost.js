import React from 'react'
import {TextContainer} from './Style'

function CardCreatePost() {
    return (
        <TextContainer>
            <textarea
                placeholder={'Escreva seu post'}
                required
            />

        </TextContainer>
    )
}
export default CardCreatePost;