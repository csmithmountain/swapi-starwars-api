import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function Starships() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("https://swapi.dev/api/starships");
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
            <h1>Starships</h1>
            <Grid columns={3}>
              {data.results?.map((starships, i) => {
                return (
                  <Grid.Column key={i}>
                    <Card
                      style={{
                        width: "300px",
                        height: "100%",
                      }}
                    >
                      <Card.Content>
                        <Card.Header>{starships.name}</Card.Header>
                        <Card.Description>
                          <strong>Model</strong>
                          <p>{starships.model}</p>
                          <strong>Manufacturer</strong>
                          <p>{starships.manufacturer}</p>
                          <strong>Cost in credits</strong>
                          <p>{starships.cost_in_credits}</p>
                          <strong>Lenght</strong>
                          <p>{starships.lenght}</p>
                          <strong>Max atmosphering speed</strong>
                          <p>{starships.max_atmosphering_speed}</p>
                          <strong>Crew</strong>
                          <p>{starships.crew}</p>
                          <strong>Passengers</strong>
                          <p>{starships.passengers}</p>
                          <strong>Cargo capacity</strong>
                          <p>{starships.cargo_capacity}</p>
                          <strong>Consumables</strong>
                          <p>{starships.consumables}</p>
                          <strong>Hyperdrive rating</strong>
                          <p>{starships.hyperdrive_rating}</p>
                          <strong>MGLT</strong>
                          <p>{starships.MGLT}</p>
                          <strong>Starships class</strong>
                          <p>{starships.starships_class}</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid>
            <Container                style={{display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                
              }}>
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
                onClick={() => handleNext()}
              />
            </Container>
          </Container>
        )}
      </Container>
    </>
  );
}
