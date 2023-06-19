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
    <Container>
      <div className="App">
        <Header />
        <div className="App-body">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
