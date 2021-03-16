import React, { useState } from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from "./Constants/Theme";
import Router from "./Router/Router";
import { BrowserRouter } from 'react-router-dom';
import Header from "./Components/Header/Header";
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100%;
`

function App() {
  const token = localStorage.getItem('token')
  const [valueBtnLogin, setValueBtnLogin] = useState(token ? 'Logout' : 'Login')
  /* const [valueBtnCreatePost, setValueBtnCreatePost] = useState(token ? 'Criar Post' : '') */

  return (
    <AppContainer>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header
            valueBtnLogin={valueBtnLogin}
            setValueBtnLogin={setValueBtnLogin}
            /* valueBtnCreatePost={valueBtnCreatePost}
            setValueBtnCreatePost={setValueBtnCreatePost} */
          />
          <Router
            valueBtnLogin={valueBtnLogin}
            setValueBtnLogin={setValueBtnLogin}
            /* valueBtnCreatePost={valueBtnCreatePost}
            setValueBtnCreatePost={setValueBtnCreatePost} */
          />
        </ThemeProvider>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
