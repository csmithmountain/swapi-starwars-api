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
      setLoading(false);
    }

    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    async function fetchStarships() {
      let res = await fetch("https://swapi.dev/api/starships");
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    async function fetchVehicles() {
      let res = await fetch("https://swapi.dev/api/vehicles");
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }

    async function fetchSpecies() {
      let res = await fetch("https://swapi.dev/api/species");
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchFilms();
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
    fetchPlanets();
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
              <Route path="/films" element={<Films data={films} />} />
              <Route path="/people" element={<People data={people} />} />
              <Route path="/planets" element={<Planets data={planets} />} />
              <Route path="/species" element={<Species data={species} />} />
              <Route
                path="/starships"
                element={<Starships data={starships} />}
              />
              <Route path="/vehicles" element={<Vehicles data={vehicles} />} />
            </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
