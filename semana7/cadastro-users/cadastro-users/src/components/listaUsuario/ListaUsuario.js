import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxListaUsuario = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10vh;
    background-color: aqua;
    width: 70vw;
    border-radius: 10px;
`

const Paragrafo = styled.p`
    display: flex;
    justify-content: space-between;
`

const BtnDelete = styled.button`
    margin-left: 15px;
`

export default class ListaUsuario extends React.Component {

    state = {
        users: []
    }
    
    getUsers = () => {

        const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {
                headers: {
                    Authorization: 'daniel-ribeiro-epps'
                }
            }
        )
        request.then((response) => {
            
            this.setState({ users: response.data })
            console.log('Usuários', this.state.users)
        })
            .catch((error) => {
                alert('Não foi possível mostrar a lista de usuários.')
            })
    }

    componentDidMount = () => {
        if (this.state.users) {
            this.getUsers()
        }
    }

    componentDidUpdate = () => {
        this.getUsers()
    }

    delUser = (id) => {
        const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}` ,
            {
                headers: {
                    Authorization: 'daniel-ribeiro-epps'
                }
            }
        )
        request.then((response) => {
            alert('O usuário foi removido.')
        })
        .catch((error) => {
            alert('Não foi possível remover o usuário.' + error)
        })
    }



    render() {
        
        const usersRenderizados = this.state.users.map((user) => {
            return (

                <Paragrafo>
                    {user.name} 

                    <BtnDelete onClick={() => this.delUser(user.id)}>x</BtnDelete>
                </Paragrafo>
            )
        })
        return (
            <BoxListaUsuario>

                <h1>Lista de usuários</h1>

                <div>
                    {usersRenderizados} 
                </div>

            </BoxListaUsuario>
        )
    }

}
