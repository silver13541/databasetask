import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Task 1</Nav.Link>
      <Nav.Link href="/task2">Task 2</Nav.Link>
      <Nav.Link href="/task3">Task 3,5</Nav.Link>
      <Nav.Link href="/task4">Task 4</Nav.Link>
      <Nav.Link href="/task6">Task 6</Nav.Link>
      <Nav.Link href="/task7">Task 7</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};
