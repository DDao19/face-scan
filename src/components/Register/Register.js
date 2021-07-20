import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navigation />
      <Container className="pt-5" style={{ marginTop: "12rem" }}>
        <Row className="justify-content-center">
          <Col lg="6" className={classes.registerForm} data-aos="fade-right">
            <h3 className="text-center text-light">Register</h3>
            <Form>
              <Form.Group>
                <Form.Label className="text-light">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Email" />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                className="mt-4"
                size="block"
                variant="info"
                type="submit"
              >
                Register
              </Button>
              <h5 className="my-3 text-center text-light">
                Already have an account? <Link to="/signin">Log In</Link>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
