import { ThemeProvider } from "@material-ui/core";
import theme from "./Constants/Theme";
import Router from "./Router/Router";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
