import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Container from "@mui/material/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container id="main" maxWidth={false} disableGutters={true}>
      <Header />
      <Container className="App-body" maxWidth={false}>
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
