import { InputContainer } from './Style';
import ButtonsForm from '../ButtonsForms/ButtonsForm';
import InputForm from '../InputForm/InputForm'
import useForm from '../../Hooks/useForm'
import requestLogin from '../../Services/requestLogin';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Form() {

    const [form, handleInputChange, clear] = useForm({email: '', password: ''})
    const history = useHistory()

    const onSubmitForm = (event) =>{
        event.preventDefault()
        requestLogin(form, clear, history)
        console.log('form', form)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
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
                    label={"password"}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                    onChange={handleInputChange}
                />
                <ButtonsForm
                    color={'primary'} 
                    content={'Fazer Login'}
                    type={'submit'}
                />
            </form>
        </InputContainer>
    )
}
export default Form;
