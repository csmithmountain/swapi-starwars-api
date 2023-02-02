import React from "react";
import { Menu, Container } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu
      fixed="top"
      className="navBar"
      style={{
        border: "none",
        borderBottom: "1px yellow solid",
      }}
    >
      <Container
        style={{
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div class="ui seven item inverted menu">
          <a href="/" class="item">
            Star Wars API
          </a>
          <a href="/films" class="item">
            Films
          </a>
          <a href="/people" class="item">
            People
          </a>
          <a href="/planets" class="item">
            Planets
          </a>
          <a href="/species" class="item">
            Species
          </a>
          <a href="/starships" class="item">
            Starships
          </a>
          <a href="/vehicles" class="item">
            Vehicles
          </a>
        </div>
        {/* <Link to="/">
          <Menu.Item name="Star Wars API"></Menu.Item>
        </Link>
        <Link to="/films">
          <Menu.Item name="Films"></Menu.Item>
        </Link>
        <Link to="/people">
          <Menu.Item name="People"></Menu.Item>
        </Link>
        <Link to="/planets">
          <Menu.Item name="Planets"></Menu.Item>
        </Link>
        <Link to="/species">
          <Menu.Item name="Species"></Menu.Item>
        </Link>
        <Link to="/starships">
          <Menu.Item name="Starships"></Menu.Item>
        </Link>
        <Link to="/vehicles">
          <Menu.Item name="Vehicles"></Menu.Item>
        </Link> */}
      </Container>
    </Menu>
  );
}
