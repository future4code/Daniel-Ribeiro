import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import {
  ContainerHome,
  ContainerAstronauta, 
  ImgAstronauta, ContainerContent, 
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
      <div>
        <ContainerAstronauta>
          <ImgAstronauta src={AstronautaHome}/>
        </ContainerAstronauta>
        <ContainerContent>
          <h1>O Infinito te aguarda</h1>
          <H2>Não perca tempo, embarque com a LabeX</H2>
          <ContainerBtnViagens>
            <BtnViagens onClick={() => goToPage(history, '/trips/details')}>Conheça nossas viagens</BtnViagens>
          </ContainerBtnViagens>
        </ContainerContent>
      </div>
    </ContainerHome>
  )
};

export default HomePage;
