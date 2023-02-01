import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Starships({ data }) {
  return (
    <>
      <h1>Starships</h1>
      <Grid columns={15}>
        {data.map((starships, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
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
                    <strong>Pilots</strong>
                    <p>{starships.pilots}</p>
                    <strong>Films</strong>
                    <p>{starships.films}</p>
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
