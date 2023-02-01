import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function People({ data }) {
  return (
    <>
      <h1>People</h1>
      <Grid columns={5}>
        {data.map((people, i) => {
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
    </>
  );
}
