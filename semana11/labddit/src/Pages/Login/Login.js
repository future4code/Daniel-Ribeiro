import React from 'react';
import { LoginContainer, RegisterBtnContainer } from './style';
import Form from '../../Components/Forms/Form'
import ButtonsForm from '../../Components/ButtonsForms/ButtonsForm'
import { useHistory } from 'react-router-dom';
import { goToRegister } from '../../Router/Coordinator'
import useUnProtectedPage from '../../Hooks/useUnProtectedPage';


function Login({valueBtnLogin, setValueBtnLogin}) {
    const history = useHistory()
    useUnProtectedPage()
    return (
        <LoginContainer>
            <h1>Page login</h1>
            <Form 
                valueBtnLogin={valueBtnLogin}
                setValueBtnLogin={setValueBtnLogin}
            />
            <RegisterBtnContainer>
                <ButtonsForm
                    onClick={() => goToRegister(history)}
                    content={'Não tem conta? Cadastre-se!'}
                />
            </RegisterBtnContainer>
        </LoginContainer>
    )
}

export default Login;