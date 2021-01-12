import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxUsuario = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10vh;
    background-color: aqua;
    height: 40vh;
    width: 70vw;
    border-radius: 10px;
`

const InputForm = styled.input`
    border-radius: 5px;
`

const BtnCreateUser = styled.button`
    cursor: pointer;
`

export default class FormUsuario extends React.Component {

    state = {
        inputValueName: '',
        inputValueEmail: ''
    }

    pegarInputName = (event) =>{
        this.setState({inputValueName: event.target.value})
    }

    pegarInputEmail = (event) =>{
        this.setState({inputValueEmail: event.target.value})
    }

    createUser = () => {
        const body = {
            name: this.state.inputValueName.toUpperCase(),
            email: this.state.inputValueEmail.toLowerCase()
        }

        console.log('body', body)

        const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,
        {
            headers: {
                Authorization: 'daniel-ribeiro-epps'
            }
        })
        request.then((response) => {
            alert(`${this.state.inputValueName}, Seu cadastro foi criado com sucesso. Seja bem vindo!`)
            this.setState({inputValueName: '', inputValueEmail: ''})
            
        })
        .catch((error) => {
            alert('Não foi possível concluir o cadastro, tente novamente! Nome e e-mail obrigatórios.')
        })
    }

    render() {
        return (
            <BoxUsuario>

                <h1>Cadastro</h1>

                <form>
                    <div>
                        <label >Nome: </label>
                        <InputForm 
                            value={this.state.inputValueName}
                            onChange={this.pegarInputName}
                            placeholder= 'Nome'
                            required
                        />
                    </div>


                    <div>
                        <label>E-mail: </label>
                        <InputForm
                            type="email"
                            value={this.state.inputValueEmail}
                            onChange={this.pegarInputEmail}
                            placeholder= 'E-mail'
                            required
                        />
                    </div>
                </form>
                <BtnCreateUser onClick={this.createUser}>Criar Cadastro</BtnCreateUser>
            </BoxUsuario>
        )
    }

}
