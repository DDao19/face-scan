import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Register = ({ handleLoginRegister, loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(false);

  const onRegisterChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.type === "email") {
      setEmail(e.target.value);
    }
    if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };
  const onSubmitRegister = () => {
    if (name === "" || email === "" || password === "") {
      setRegistrationError(true);
    } else {
      fetch("https://evening-brook-88624.herokuapp.com/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user) {
            loadUser(user);
            handleLoginRegister();
          }
        });
    }
  };

  return (
    <div>
      <Container className="pt-5" style={{ marginTop: "12rem" }}>
        <Row className="justify-content-center">
          <Col lg="6" className={classes.registerForm} data-aos="zoom-in">
            <h3 className="text-center text-light">Register</h3>
            <Form>
              <Form.Group>
                {registrationError ? (
                  <Alert variant="danger">All fields must be filled in</Alert>
                ) : null}
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  onChange={onRegisterChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  onChange={onRegisterChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  onChange={onRegisterChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Link
                to={
                  name === "" || email === "" || password === ""
                    ? "/register"
                    : "/face-detect"
                }
                className={classes.link}
              >
                <Button
                  className="mt-4"
                  size="block"
                  variant="primary"
                  type="submit"
                  onClick={onSubmitRegister}
                >
                  Register
                </Button>
              </Link>
              <h5 className="my-3 text-center text-light">
                Already have an account? <Link to="/">Log In</Link>
              </h5>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
