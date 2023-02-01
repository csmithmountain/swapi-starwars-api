import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function Species() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    setData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("https://swapi.dev/api/species");
  }, []);

  function handleNext() {
    // console.log(data.next);
    if (data.next === null) {
      console.log("Error!!!!!");
    } else {
      fetchData(data.next);
    }
  }
  function handlePrev() {
    if (data.previous === null) {
      console.log("Error!!!!");
    } else {
      // console.log(data.previous);
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
            <h1>Species</h1>
            <Grid columns={11}>
              {data.results?.map((species, i) => {
                return (
                  <Grid.Column key={i}>
                    <Card>
                      <Card.Content>
                        <Card.Header>{species.name}</Card.Header>
                        <Card.Description>
                          <strong>Classification</strong>
                          <p>{species.classification}</p>
                          <strong>Designation</strong>
                          <p>{species.designation}</p>
                          <strong>Average heigh</strong>
                          <p>{species.average_height}</p>
                          <strong>skin colors</strong>
                          <p>{species.skin_colors}</p>
                          <strong>Hair colors</strong>
                          <p>{species.hair_colors}</p>
                          <strong>Eye color</strong>
                          <p>{species.eye_color}</p>
                          <strong>Average lifespan</strong>
                          <p>{species.average_lifespan}</p>
                          <strong>Homeworld</strong>
                          <p>{species.homeworld}</p>
                          <strong>Language</strong>
                          <p>{species.language}</p>
                          <strong>People</strong>
                          <p>{species.people}</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
            </Grid>
            <Container>
              <Button
                content="Back"
                icon="left arrow"
                labelPosition="left"
                onClick={handlePrev}
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
