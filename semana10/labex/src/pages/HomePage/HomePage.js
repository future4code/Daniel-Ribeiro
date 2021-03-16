import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import {
  ContainerHome,
  ContainerMainHome,
  ContainerAstronauta, 
  ImgAstronauta, ContainerContent, 
  H1,
  H2,
  ContainerBtnViagens,
  BtnViagens,
} from '../HomePage/style'
import AstronautaImg from '../../img/astronauta.png'
import AstronautaHome from '../../img/astronautaHome.png'

const HomePage = () => {

  const history = useHistory()

  return (
    <ContainerHome>
      <ContainerMainHome>
        <ContainerAstronauta>
          <ImgAstronauta src={AstronautaHome}/>
        </ContainerAstronauta>
        <ContainerContent>
          <H1>O Infinito te aguarda</H1>
          <H2>Não perca tempo, embarque com a LabeX</H2>
          <ContainerBtnViagens>
            <BtnViagens onClick={() => goToPage(history, '/trips/details')}>Conheça nossas viagens</BtnViagens>
          </ContainerBtnViagens>
        </ContainerContent>
      </ContainerMainHome>
    </ContainerHome>
  )
};

export default HomePage;
