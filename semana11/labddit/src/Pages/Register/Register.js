import React from 'react';
import { InputContainer } from '../../Components/Forms/Style';
import { RegisterContainer } from './style'
import InputForm from '../../Components/InputForm/InputForm';
import { useState } from 'react';
import ButtonsForm from '../../Components/ButtonsForms/ButtonsForm'
import useForm from '../../Hooks/useForm';
import requestSingUp from '../../Services/requestSingUp';
import { useHistory } from 'react-router-dom';
import useUnProtectedPage from '../../Hooks/useUnProtectedPage';


function Register() {
    useUnProtectedPage()
    const [form, handleInputChange, clear] = useForm({email: '', password: '', username: ''})
    const history = useHistory()

    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log('form register', form)
        requestSingUp(form, clear, history)
    }

    return (
        <RegisterContainer>
            <h1>Page Register</h1>
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <InputForm
                        name={'username'}
                        value={form.username}
                        type={'text'}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        name={'email'}
                        value={form.email}
                        type={'text'}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        onChange={handleInputChange}
                    />
                    <InputForm
                        name={'password'}
                        value={form.password}
                        type={'password'}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        onChange={handleInputChange}
                    />
                    <ButtonsForm
                        content={'Concluir Registro'}
                        color={'primary'}
                        type={'submit'}
                    />

                </form>
            </InputContainer>
        </RegisterContainer>
    )
}

export default Register;