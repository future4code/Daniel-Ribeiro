import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RemoveMacthes from '../../img/deleteMatches.png'

const ContainerMatch = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 80vh;
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ab0eae;
    position: relative;
    padding: 10px;
`

const ContainerItemMatch = styled.div`
    margin: 10px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const ImgMacth = styled.div`
    background-image: url(${(props) => props.foto});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

const NameMatch = styled.p`
    margin: 5px 0 0 0;
`

const ContainerBtnClear = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
`

const BtnClear = styled.button`
    position: absolute;
    bottom: 20px;
    background-color: transparent;
    border: none;
    transition-duration: .4s;
    cursor: pointer;
    padding: 5px;

    &:hover{
        transform: scale(1.2)
    }

    &:focus{
        outline: none;
    }
`

const ImgDelMatches = styled.img`
    height: 40px;
`

const ContainerMatchLess = styled.div`
    width: 80%;
    text-align: center;

    img{
        width: 100%;
        margin-top: 50px;
    }
`

function Index() {

    const [matchsList, setMatchsList] = useState([])

    useEffect(() => {
        getMatchs()
    }, [])

    useEffect(() => {
        getMatchs()
    }, [matchsList])

    const getMatchs = () => {
        const request = axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/matches')
        request.then((response) => {
            setMatchsList(response.data.matches)
            console.log('matchs', matchsList)
        })
        request.catch((error) => {
            console.log(error)
        })
    }

    const clearMatches = () => {
        const request = axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/clear')
        request.then((response) => {
            alert('Seu contatinhos foram deletados')
        })
        request.catch((error) => {
            console.log(error)
        })
    }

    const verifyListMacht = () => {
        if (matchsList.length === 0) {
            return (
                <ContainerMatchLess>
                    <h2>Você ainda não tem nenhum match.</h2>
                    <img src="https://media.giphy.com/media/jRtGjzkm8JbRC/giphy.gif" alt='gif de personagem de desenho chorando.'/>
                </ContainerMatchLess>
            )
        } else {
            return (
                matchsList.map((person) => {
                    return (
                        <ContainerItemMatch>
                            <ImgMacth foto={person.photo}></ImgMacth>
                            <NameMatch>{person.name}</NameMatch>
                        </ContainerItemMatch>
                    )
                })
            )
        }
    }

    return (

        <ContainerMatch>
            {verifyListMacht()}
            <ContainerBtnClear>
                <BtnClear onClick={clearMatches}>
                    <ImgDelMatches src={RemoveMacthes} alt='botão para remover matches' />
                </BtnClear>
            </ContainerBtnClear>

        </ContainerMatch>
    );
}

export default Index;
