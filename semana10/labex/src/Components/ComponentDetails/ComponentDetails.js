import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComponentDetails = (props) => {

    const token = localStorage.getItem('token')

    const decideCandidate = (candidateId, aproveValue) =>{
        const body = {
            approve: aproveValue
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${props.tripId}/candidates/${candidateId}/decide`, body, {
            headers:{
                auth: token
            }
        })
        .then((res) =>{
            alert('candidato aprovado')
            props.getTripDetails(props.tripId)
        })
        .catch((error) =>{
            alert('error')
        })
    }


    const candidatesTrip = props.tripDetails.candidates.map((candidate) => {
        return (
            <div>
                <p>{candidate.name}</p>
                <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
                <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
            </div>

        )
    })

    const approved = props.tripDetails.approved.map((candidate) =>{
        return(
            <div>
                <p>{candidate.name}</p>
            </div>
        )
    })

    console.log('candidatos', props.tripDetails.candidates)
    return (
        <div>
            <div>
                <h2>Detalhes da viagem</h2>
                <p>Nome: {props.tripDetails.name}</p>
                <p>Planeta: {props.tripDetails.planet}</p>
                <p>Descrição: {props.tripDetails.description}</p>
                <p>Data: {props.tripDetails.date}</p>
                <p>Duração: {props.tripDetails.durationInDays} dias</p>

            </div>

            <div>
                <h2>Candidatos a astronautas:</h2>
                {props.tripDetails.candidates.length === 0 ?
                    <h3>Não há candidatos para esta viagem!</h3> :
                    <>{candidatesTrip}</>}
            </div>

            <div>
                <h2>Astronautas Aprovados</h2>
                {props.tripDetails.approved.length === 0 ? 
                <h3>Não há candidatos aprovados para esta viagem</h3> :
                <>{approved}</>}
            </div>

            <button onClick={props.goTolistTrip}>Voltar</button>
        </div>
    )
}

export default ComponentDetails;