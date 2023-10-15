import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function LumixHeader() {
  const navigate = useNavigate();

  const navLinkStyle = {
    cursor: 'pointer', // Set the cursor to a hand on hover
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={navLinkStyle}>Lumix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')} style={navLinkStyle}>Documentation</Nav.Link>
            <Nav.Link onClick={() => navigate('/contributors')} style={navLinkStyle}>Contributors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LumixHeader;
