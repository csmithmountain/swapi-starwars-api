import React from "react";
import { Card, Grid } from "semantic-ui-react";


export default function Vehicles({ data }) {
  return (
    <>
      <h1>Vehicles</h1>
      <Grid columns={13}>
        {data.map((vehicles, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
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
                    <strong>Pilots</strong>
                    <p>{vehicles.pilots}</p>
                    <strong>Films</strong>
                    <p>{vehicles.films}</p>
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
