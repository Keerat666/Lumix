import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useThemeContext } from '../context/themeContext';

function LumixHeader() {
  const navigate = useNavigate();
  const { theme, setTheme } = useThemeContext();

  const navLinkStyle = {
    cursor: 'pointer', // Set the cursor to a hand on hover
  };

  const handleDarkTheme = () => {
    setTheme(true);
    localStorage.setItem("darkmode", "true");
  };

  const handleLightTheme = () => {
    setTheme(false);
    localStorage.setItem("darkmode", "");
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
          <div>
            {theme ? (
              <div className="text-white" onClick={handleLightTheme}>
                <MdOutlineLightMode style={{ cursor: 'pointer' }} size="1.5rem" />
              </div>
            ) : (
              <div className="text-white" onClick={handleDarkTheme}>
                <MdOutlineDarkMode style={{ cursor: 'pointer' }} size="1.5rem" />
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LumixHeader;
