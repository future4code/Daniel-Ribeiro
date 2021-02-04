import React, { useState, useEffect } from "react";
import axios from 'axios'
import { 
  ContainerInputLogin, 
  ContainerLogin, Input, 
  ContainerInputItem,
  ContainerBtn,
} from '../LoginPage/style'
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToPage(history, '/adm');
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ribeiro-epps/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        
        goToPage(history, '/adm')
      })
      .catch((err) => {
        console.log(err);
        alert('Senha ou e-mail incorretos, tente novamente.')
      });
  };

  const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

  const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }

  return (
    <ContainerLogin>
      <h1>Login page</h1>
      <ContainerInputLogin>
        <ContainerInputItem>
          <label>E-mail: </label>
          <Input 
            value={email}
            onChange={onChangeEmail}
            placeholder='e-mail'
          />
        </ContainerInputItem>
        
        <ContainerInputItem>
          <label>Password: </label>
          <Input 
            value={password}
            onChange={onChangePassword}
            placeholder='Password'
          />
        </ContainerInputItem>
        <ContainerBtn>
          <button onClick={login}>Login</button>
        </ContainerBtn>
        
      </ContainerInputLogin>
    </ContainerLogin>
  )
};

export default LoginPage;
