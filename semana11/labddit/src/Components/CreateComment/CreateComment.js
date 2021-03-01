import { Button } from '@material-ui/core';
import React from 'react';
import { CommentContainer, InputComment } from './Style'
import useForm from '../../Hooks/useForm';
import requestCreateComment from '../../Services/requestCreateComment'
import useRequestDetails from '../../Services/useRequestDetails';

function CreateComment(props) {
    const [form, handleInputChange, clear] = useForm({ text: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
        requestCreateComment(form, props.id, props.requestCommits, clear)
        
        /* console.log('form', form) */
    }

    return (
        <CommentContainer>
            <form onSubmit={onSubmitForm}>
                <InputComment
                    placeholder={'O que você pensa sobre?'}
                    name={'text'}
                    value={form.text}
                    onChange={handleInputChange}
                />
                <Button
                    className='btnActive'
                    variant={"contained"}
                    type={'submit'}
                    color={'primary'}
                >Comentar</Button>
            </form>

        </CommentContainer>
    )
}
export default CreateComment;