import logo from './logo.svg';
import React from "react";
import './App.css'
import { Route, Switch, Link } from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Container, Form, Button} from "react-bootstrap";
import Home from "./composants/Home";
import Tickets from "./composants/Tickets";
import AddTicket from './composants/AddTicket';
import UpdateTicket from './composants/UpdateTicket';


function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} className="App-logo" alt="logo" height="0vmin"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/Tickets">Tickets</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container my-5" style={{ maxWidth: "800px" }}>
      <Switch>
        <React.Fragment>
        <Container>
            <Route exact path="/" component={Home} className="mx-auto"/>
            <Route exact path="/Tickets" component={Tickets} className="mx-auto"/>
            <Route exact path="/Ajouter" component={AddTicket} className="mx-auto"/>
            <Route exact path="/:id/Modifier" component={UpdateTicket} className="mx-auto"/>
        </Container>
        </React.Fragment>
        </Switch>
      </div>
    </div>
  );
}

export default App;
