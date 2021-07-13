import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Face Scan AI</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#signout">Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
