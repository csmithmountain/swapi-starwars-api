import React from 'react'
import { Card, Grid } from "semantic-ui-react";


export default function Planets({ data }) {
  return (
    <>
      <h1>Planets</h1>
      <Grid columns={11}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Rotation period</strong>
                    <p>{planets.rotation_period}</p>
                    <strong>Orbital rotation</strong>
                    <p>{planets.orbital_rotation}</p>
                    <strong>Diameter</strong>
                    <p>{planets.diameter}</p>
                    <strong>Climate</strong>
                    <p>{planets.climate}</p>
                    <strong>Gravity</strong>
                    <p>{planets.gravity}</p>
                    <strong>Diameter</strong>
                    <p>{planets.diameter}</p>
                    <strong>Terrain</strong>
                    <p>{planets.terrain}</p>
                    <strong>Surface water</strong>
                    <p>{planets.surface_water}</p>
                    <strong>Population</strong>
                    <p>{planets.population}</p>
                    <strong>Residents</strong>
                    <p>{planets.residents}</p>
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
