import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Home from './Components/PageHome/Index';
import Match from './Components/PageMatch/Index';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ContainerAplication = styled.div`
  height: 95vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
`

const Nav = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`


function App() {

  const [goTo, setGoTo] = useState(false)
  const [profile, setProfile] = useState({})

  const changePage = () => {
    setGoTo(!goTo)
  }

  useEffect(() => {
    getProfiles()
  }, [])

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
          <button onClick={changePage}>{goTo ? 'Home' : 'Matchs'}</button>
        </Nav>

        {goTo ?
          <Match /> :
          <>{profile && 
            <Home
              name={profile.name}
              photo={profile.photo}
              bio={profile.bio}
              id={profile.id}
            />}
          </>
        }

        <div>
          <button onClick={getProfiles}>Unlike</button>
          <button onClick={() => chooseProfile(profile.id, true)}>Like</button>
        </div>

      </ContainerAplication>
    </ContainerApp>
  );
}

export default App;
