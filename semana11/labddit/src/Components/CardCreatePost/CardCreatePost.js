import React from 'react'
import {TextContainer} from './Style'
import useForm from '../../Hooks/useForm';
import requestCreatePost from '../../Services/requestCreatePost'
import { Button } from '@material-ui/core';

function CardCreatePost() {

    const [form, handleInputChange, clear] = useForm({ text: '', title: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
        requestCreatePost(form, clear)
    }
        console.log('form', form)

    return (
        <TextContainer>
            <form onSubmit={onSubmitForm} className='form-create-post'>
                <input 
                    className={'input-title'}
                    name={'title'}
                    value={form.title}
                    onChange={handleInputChange}
                    /* variant={"outlined"} */
                    placeholder={"Título"}
                />
                <textarea
                    name={'text'}
                    value={form.text}
                    onChange={handleInputChange}
                    placeholder={'Escreva seu post'}
                    required
                />
                <Button
                    type={'submit'}
                    variant={"contained"}
                    color={'primary'}
                    
                >Criar Post</Button>
            </form>
            

        </TextContainer>
    )
}
export default CardCreatePost;