import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="py-4 navbar">
      <Container>
        <Navbar.Brand href="#home">
          <h3>Face Scan Recognition</h3>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#signout">
            <h5>
              Sign Out <i className="fas fa-sign-out-alt"></i>
            </h5>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
