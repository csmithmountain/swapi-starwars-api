import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function Films() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("https://swapi.dev/api/films");
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
            <h1>Films</h1>

            <Grid columns={3}>
              {data.results?.map((films, i) => {
                return (
                  <Grid.Column key={i}>
                    <Card
                      style={{
                        width: "300px",
                        height: "100%",
                      }}
                    >
                      <Card.Content>
                        <Card.Header>{films.title}</Card.Header>
                        <Card.Description>
                          <strong>Episode</strong>
                          <p>{films.episode_id}</p>
                          <strong>Opening Crawl</strong>
                          <p>{films.opening_crawl}</p>
                          <strong>Director</strong>
                          <p>{films.director}</p>
                          <strong>Producer</strong>
                          <p>{films.producer}</p>
                          <strong>Release date</strong>
                          <p>{films.release_date}</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid>
            <Container
                           style={{display: "flex",
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
