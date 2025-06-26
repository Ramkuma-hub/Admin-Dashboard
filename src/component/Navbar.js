
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        
        <Navbar.Brand href="/">MY DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="custom-nav">
            <Link className='nav-decoration' to="/">Dashboard</Link>
            <Link className='nav-decoration' to="/users">Users</Link>
            <Link className='nav-decoration' to="/add-user">Add User</Link>
             <Link className='nav-decoration' to="/setting">Setting</Link>
            
           
          </Nav>
        </Navbar.Collapse>
        
      </Container>
        </Navbar>
  );
}

  