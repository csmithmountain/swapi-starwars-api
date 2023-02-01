import React, { useState, useEffect } from "react";
import { Card, Grid } from "semantic-ui-react";
import { Container } from "semantic-ui-react"
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
    console.log(data.next);
    fetchData(data.next);
  }
  function handlePrev() {}

  return (
    <>
      <h1>People</h1>
      <Grid columns={5}>
        {data.results?.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Year of birth</strong>
                    <p>{people.birth_year}</p>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Gender</strong>
                    <p>{people.gender}</p>
                    <strong>Homeworld</strong>
                    <p>{people.homeworld}</p>
                    <strong>Films</strong>
                    <a href="/films ">{people.films}</a>
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
    </>
  );
}
