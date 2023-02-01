import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Films from "./components/Films";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Starships";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

function App() {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
    }

    async function fetchStarships() {
      let res = await fetch("https://swapi.dev/api/starships");
      let data = await res.json();
      setStarships(data.results);
    }

    async function fetchVehicles() {
      let res = await fetch("https://swapi.dev/api/vehicles");
      let data = await res.json();
      setVehicles(data.results);
    }

    async function fetchSpecies() {
      let res = await fetch("https://swapi.dev/api/species");
      let data = await res.json();
      setSpecies(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchFilms();
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
    fetchPlanets();
    setLoading(false);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/vehicles" element={<Vehicles />} />
            </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
