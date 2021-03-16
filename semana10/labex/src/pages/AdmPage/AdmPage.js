import React from "react";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import {BtnNav} from '../AdmPage/style';
import {goToPage} from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom";
import {
    ContainerAdmin,
    ContainerMainAdmin,
    ContainerCards,
    ContainerBtn,
    Card,
    ContainerImg,
    Img
} from '../AdmPage/style'
import ImgCreate from '../../img/imgCreate.png';
import ImgGerenciar from '../../img/imgGerenciar.png';


const AdmPage = () => {

    useProtectedPage()

    const history = useHistory()

    return (
        <ContainerAdmin>
            <ContainerMainAdmin>
                <ContainerCards>
                    <Card>
                        <h2>Aqui você pode criar viagens</h2>
                        <ContainerImg>
                            <Img src={ImgCreate}/>
                        </ContainerImg>
                        <ContainerBtn>
                            <BtnNav onClick={() => goToPage(history, '/trips/create')}>Criar Viagem</BtnNav>
                        </ContainerBtn>
                        
                    </Card>

                    <Card>
                        <h2>Aqui você pode gerenciar as viagens</h2>
                        <ContainerImg>
                            <Img src={ImgGerenciar}/>
                        </ContainerImg>
                        <ContainerBtn>
                            <BtnNav onClick={() => goToPage(history, '/trips/list')}>Viagens</BtnNav>
                        </ContainerBtn>
                        
                    </Card>
                </ContainerCards>
            </ContainerMainAdmin>
        </ContainerAdmin>
    )
};

export default AdmPage;
