import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu inverted>
      <Container>
        <Link to="/">
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
        </Link>
      </Container>
    </Menu>
  );
}
