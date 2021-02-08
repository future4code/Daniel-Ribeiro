import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    BoxDetailsTrip,
    ContainerMain,
    ContainerCard,
    ContainerBtn,
    Btn,
    Img,
    BtnBack,
    ImgBack
} from '../ComponentDetails/style';
import ApprovedImg from '../../img/approved.png';
import ReprovedImg from '../../img/reproved.png'
import ImgArrow from '../../img/arrow.png'

const ComponentDetails = (props) => {

    const token = localStorage.getItem('token')

    const decideCandidate = (candidateId, aproveValue) => {
        const body = {
            approve: aproveValue
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/trips/${props.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                alert('candidato aprovado')
                props.getTripDetails(props.tripId)
            })
            .catch((error) => {
                alert('error')
            })
    }


    const candidatesTrip = props.tripDetails.candidates.map((candidate) => {
        return (
            <div>
                <div>
                    <p>- {candidate.name}</p>
                </div>
                <ContainerBtn>

                    <Btn onClick={() => decideCandidate(candidate.id, true)}><Img src={ApprovedImg}/></Btn>
                    <Btn onClick={() => decideCandidate(candidate.id, false)}><Img src={ReprovedImg}/></Btn>
                </ContainerBtn>
            </div>
        )
    })

    const approved = props.tripDetails.approved.map((candidate) => {
        return (
            <div>
                <p>- {candidate.name}</p>
            </div>
        )
    })


    return (
        <BoxDetailsTrip>
            <ContainerMain>
                <ContainerCard>
                    <h2>Detalhes da viagem</h2>
                    <p><strong>Nome:</strong> {props.tripDetails.name}</p>
                    <p><strong>Planeta:</strong> {props.tripDetails.planet}</p>
                    <p><strong>Descrição:</strong> {props.tripDetails.description}</p>
                    <p><strong>Data:</strong> {props.tripDetails.date}</p>
                    <p><strong>Duração:</strong> {props.tripDetails.durationInDays} dias</p>
                </ContainerCard>

                <ContainerCard>
                    <h2>Candidatos a astronautas</h2>
                    {props.tripDetails.candidates.length === 0 ?
                        <h3>Não há candidatos para esta viagem!</h3> :
                        <>{candidatesTrip}</>}
                </ContainerCard>

                <ContainerCard>
                    <h2>Astronautas Aprovados</h2>
                    {props.tripDetails.approved.length === 0 ?
                        <h3>Não há candidatos aprovados para esta viagem</h3> :
                        <>{approved}</>}
                </ContainerCard>
            </ContainerMain>


            <BtnBack onClick={props.goTolistTrip}><ImgBack src={ImgArrow}/></BtnBack>
        </BoxDetailsTrip>
    )
}

export default ComponentDetails;