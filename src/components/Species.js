import React from 'react'
import { Card, Grid } from "semantic-ui-react";



export default function Species({ data }) {
  return (
    <>
      <h1>Species</h1>
      <Grid columns={11}>
        {data.map((species, i) => {
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
    </>
  );
}