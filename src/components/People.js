import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function People() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("https://swapi.dev/api/people");
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
              People
            </h1>
            <Grid
              columns={3}
              style={{
                width: "100%",
              }}
            >
              {data.results?.map((people, i) => {
                return (
                  <Grid.Column key={i}>
                    <Card
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Card.Content>
                        <Card.Header>{people.name}</Card.Header>
                        <Card.Description>
                          <strong>Year of birth</strong>
                          <p>{people.birth_year}</p>
                          <strong>Height</strong>
                          <p>{people.height}</p>
                          <strong>Gender</strong>
                          <p>{people.gender}</p>
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
