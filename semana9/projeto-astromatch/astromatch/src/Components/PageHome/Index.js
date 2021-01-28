import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContainerAplication from '../../styled'
import Matchs from '../PageMatch/Index'

const ContainerPhoto = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
  
`
const ContainerInfos = styled.div`

`

const Name = styled.h4`
  margin: 0;
`

const Bio = styled.p`
  margin: 0;
`

function Index(props) {
console.log(props)
  return (
    <ContainerAplication>
       <ContainerPhoto>
         <Img src={props.photo} alt />
       </ContainerPhoto>

       <ContainerInfos>
         <Name>{props.name}</Name>
         <Bio>{props.bio}</Bio>
       </ContainerInfos>
    </ContainerAplication>
  );
}

export default Index;
