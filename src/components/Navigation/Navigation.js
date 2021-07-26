import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar className="py-3 px-4 navbar">
      <Container>
        <Navbar.Brand href="#home">
          <h3>Face Scan Detection</h3>
        </Navbar.Brand>
        {isLoggedIn ? (
          <Nav className="ml-auto">
            <Link to="/" className="sign-out">
              <h5 onClick={handleLogout}>
                Sign Out <i className="fas fa-sign-out-alt"></i>
              </h5>
            </Link>
          </Nav>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default Navigation;
