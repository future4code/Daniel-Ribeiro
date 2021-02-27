import React, {useState} from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from "./Constants/Theme";
import Router from "./Router/Router";
import {BrowserRouter} from 'react-router-dom';
import Header from "./Components/Header/Header";


function App() {
  const token = localStorage.getItem('token')
  const [valueBtnLogin, setValueBtnLogin] = useState(token ? 'Logout' : 'Login')

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header 
          valueBtnLogin={valueBtnLogin}
          setValueBtnLogin={setValueBtnLogin}
        />
        <Router 
          valueBtnLogin={valueBtnLogin}
          setValueBtnLogin={setValueBtnLogin}
        />
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
