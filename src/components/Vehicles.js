import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function Vehicles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("https://swapi.dev/api/vehicles/");
  }, []);

  function handleNext() {
    if (data.next === null) {
    } else {
      fetchData(data.next);
    }
  }
  function handlePrev() {
    if (data.previous === null) {
    } else {
      fetchData(data.previous);
    }
  }
  return (
    <>
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading...</Loader>
          </Dimmer>
        ) : (
          <Container>
            <h1
              style={{
                color: "white",
              }}
            >
              Vehicles
            </h1>
            <Grid
              columns={3}
              style={{
                width: "100%",
              }}
            >
              {data.results?.map((vehicles, i) => {
                return (
                  <Grid.Column key={i}>
                    <Card
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Card.Content>
                        <Card.Header>{vehicles.name}</Card.Header>
                        <Card.Description>
                          <strong>Model</strong>
                          <p>{vehicles.model}</p>
                          <strong>Manufacturer</strong>
                          <p>{vehicles.manufacturer}</p>
                          <strong>Cost in credits</strong>
                          <p>{vehicles.cost_in_credits}</p>
                          <strong>Lenght</strong>
                          <p>{vehicles.lenght}</p>
                          <strong>Max atmosphering speed</strong>
                          <p>{vehicles.max_atmosphering_speed}</p>
                          <strong>Crew</strong>
                          <p>{vehicles.crew}</p>
                          <strong>Passengers</strong>
                          <p>{vehicles.passengers}</p>
                          <strong>Cargo capacity</strong>
                          <p>{vehicles.cargo_capacity}</p>
                          <strong>Consumables</strong>
                          <p>{vehicles.consumables}</p>
                          <strong>Starships class</strong>
                          <p>{vehicles.vehicle_class}</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                content="Back"
                icon="left arrow"
                labelPosition="left"
                onClick={handlePrev}
                style={{
                  marginTop: "2rem",
                  marginBottom: "2em",
                }}
              />
              <Button
                content="Next"
                icon="right arrow"
                labelPosition="right"
                onClick={handleNext}
              />
            </Container>
          </Container>
        )}
      </Container>
    </>
  );
}
