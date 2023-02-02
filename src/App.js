import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Films from "./components/Films";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Container
          style={{
            backgroundImage: "url(/image1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            minHeight: "100vh",
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Navbar />
          <Container
            style={{
              width: "85%",
              display: "flex",
              marginTop: "100px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/vehicles" element={<Vehicles />} />
            </Routes>
          </Container>
        </Container>
      </Router>
    </>
  );
}

export default App;
