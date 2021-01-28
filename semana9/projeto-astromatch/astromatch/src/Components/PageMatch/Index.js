import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerMatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75vh;
    border-radius: 5px;
    background-color: yellow;
`

function Index() {

    const [matchsList, setMatchsList] = useState([])

    useEffect(() =>{
        getMatchs()
    }, [])

    useEffect(() =>{
        getMatchs()
    }, [matchsList])

    const getMatchs = () =>{
        const request = axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/matches')
        request.then((response) =>{
            setMatchsList(response.data.matches)
            console.log('matchs', matchsList)
        })
        request.catch((error) =>{
            console.log(error)
        })
    }

    const clearMatches = () =>{
        const request = axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/clear')
        request.then((response) =>{
            alert('Seu contatinhos foram deletados')
        })
        request.catch((error) =>{
            console.log(error)
        })
    }

    return (
        
        <ContainerMatch>
            {matchsList.map((person) =>{
                return <p>{person.name}</p>
            })}

            <button onClick={clearMatches}>Clear</button>
        </ContainerMatch>
    );
}

export default Index;
