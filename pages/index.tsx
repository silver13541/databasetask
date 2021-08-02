import React from "react";
import { Container, ListGroup} from "react-bootstrap";
import { Header } from "../layout/Header";

export default function Task1({ countries }) {
  return (
    <>
      <Header />
      <Container>
        {countries.map((country) => (
          <ListGroup variant="flush" key={country.id}>
            <ListGroup.Item>{country.Name}</ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </>
  );
}

Task1.getInitialProps = async () => {
  const response = await fetch("https://databasetask.herokuapp.com/");
  const countries = await response.json();
  return { countries };
};
