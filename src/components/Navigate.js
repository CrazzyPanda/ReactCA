import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigate extends React.Component{
  render() {
    return(
      <div>

      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Studio Ghibli</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Film.js">Films</Nav.Link>
            <Nav.Link href="/People.js">People</Nav.Link>
            <Nav.Link href="/Species.js">Species</Nav.Link>
            <Nav.Link href="/Location.js">Locations</Nav.Link>
            <Nav.Link href="/Vehicle.js">Vehicles</Nav.Link>
          </Nav>
      </Navbar>
      </div>
    );
  }
}

export default Navigate;
