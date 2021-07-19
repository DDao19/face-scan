import { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const SignIn = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navigation />
      <Container className="pt-5" style={{ marginTop: "12rem" }}>
        <Row className="justify-content-center">
          <Col lg="6" className={classes.signinForm} data-aos="fade-right">
            <h3 className="text-center text-light">Sign In</h3>
            <Form>
              <Form.Group>
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                className="mt-3"
                size="block"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
              <h5 className="my-3 text-center text-light">
                Don't have an account? <Link to="/register">Register</Link>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
