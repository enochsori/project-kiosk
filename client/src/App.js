import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";

import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: { fontSize: "2rem", color: "black" },
    h3: { fontSize: `1.8rem`, fontWeight: "bold", color: "white" },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "white",
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='sm'>
          <Paper>
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/choose' component={ChooseScreen} exact></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
