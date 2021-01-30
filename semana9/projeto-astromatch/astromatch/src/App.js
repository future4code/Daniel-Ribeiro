import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Home from './Components/PageHome/Index';
import Match from './Components/PageMatch/Index';
import ImgMatches from './img/matches.png'
import ImgChooseMatch from './img/chooseMatch.png'
import Like from './img/like.png'
import Unlike from './img/unlike.png'

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ContainerAplication = styled.div`
  height: 95vh;
  width:400px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #5b2b65;
  background-image: linear-gradient(to bottom,  #5b2b65, #ab0fae);
  overflow: hidden;
`

const Nav = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ContainerTilte = styled.div`
  display: flex;
`

const Title1 = styled.h1`
  margin: 0;
  
`

const Title2 = styled.h1`
  margin: 0;
  color: #b809bbd9;
  font-style: italic;
`

const BtnNav = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 15px;
  transition-duration: 0.4s;
  

  &:hover{
    transform: scale(1.2)
  }

  &:focus{
    outline: none;
  }
`

const ImgBtn = styled.img`
  height: 30px;
`

const ContainerBtnLike = styled.div`
  display: ${(props) => props.pageMatch ? 'none' : 'flex'}; 
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  
`

const Imglikes = styled.img`
  height: 40px;
  
`

function App() {

  const [goTo, setGoTo] = useState(false)
  const [profile, setProfile] = useState({})

  const changePage = () => {
    setGoTo(!goTo)
  }

  useEffect(() => {
    getProfiles()
  },[])

  const getProfiles = () => {
    const request = axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/person')
    request.then((response) => {
      console.log(response.data.profile)
      setProfile(response.data.profile)
    })
    request.catch((error) => {
      console.log('Não foi possível mostrar os perfis.')
    })
  }

  const chooseProfile = (value) => {
    const body = {
      id: profile.id,
      choice: value
    }

    const request = axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-ribeiro/choose-person', body)

    request.then((response) => {
      if (response.data.isMatch === true) {
        alert('Deu match')
      }

      getProfiles()
    })
    request.catch((error) => {
      console.log(error)
    })
  }

  return (
    <ContainerApp>
      <ContainerAplication>

        <Nav>
          <ContainerTilte>
            <Title1>Astro</Title1><Title2>match</Title2>
          </ContainerTilte>
          
          <BtnNav onClick={changePage}>
            {goTo ? 
              <ImgBtn src={ImgChooseMatch}/> : 
              <ImgBtn src={ImgMatches}/>}
          </BtnNav>
        </Nav>

        {goTo ?
          <Match /> :
          <>{profile && 
            <Home
              name={profile.name}
              photo={profile.photo}
              bio={profile.bio}
              id={profile.id}
              age={profile.age}
            />}
          </>
        }

        <ContainerBtnLike pageMatch={goTo}>
          <BtnNav onClick={() => chooseProfile(false)}>
            <Imglikes src={Unlike}/>
          </BtnNav>
          <BtnNav onClick={() => chooseProfile(true)}>
            <Imglikes src={Like} />
          </BtnNav>
        </ContainerBtnLike>

      </ContainerAplication>
    </ContainerApp>
  );
}

export default App;
