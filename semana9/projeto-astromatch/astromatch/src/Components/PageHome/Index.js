import React from 'react';
import styled from 'styled-components';
import {ContainerAplication} from '../../styled'


const ContainerPhoto = styled.div`
  background-image: url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;  
  height: 90%;
  filter: blur(10px); 
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerInfos = styled.div`
  position: absolute;
  bottom: 80px;
  color: black;
  z-index: 1;
  width: 80%;
`

const BoxPhoto = styled.div`
  background-image: url(${props => props.fotobox});
  background-size: 100%;
  background-position: top;
  position: absolute;
  background-repeat: no-repeat;
  height: 70%;
  width: 90%;
  box-shadow: 0px 0px 10px 5px #888a8a;
  border-radius: 10px;
`

const Name = styled.h2`
  margin: 0;
  color: white;
`

const Bio = styled.p`
  margin: 0;
  font-size:1.2em;
  color: white;
`

function Index(props) {
console.log(props)
  return (
    <ContainerAplication>
       <ContainerPhoto foto={props.photo}>
         
       </ContainerPhoto>

       <BoxPhoto fotobox={props.photo}>
        
       </BoxPhoto>
       
       <ContainerInfos>
         <Name>{props.name}, {props.age}</Name>
         <Bio>{props.bio}</Bio>
       </ContainerInfos>
    </ContainerAplication>
  );
}

export default Index;
