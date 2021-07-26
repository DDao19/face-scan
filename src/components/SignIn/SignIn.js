import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import classes from "./SignIn.module.css";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const SignIn = ({ handleLoginRegister, loadUser, user }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signinError, setSigninError] = useState(false);
  const [noMatchError, setNoMatchError] = useState(false);

  const history = useHistory();
  const onSignInChange = (e) => {
    if (e.target.type === "email") {
      setSignInEmail(e.target.value);
    }
    if (e.target.type === "password") {
      setSignInPassword(e.target.value);
    }
  };

  const onSubmitSignIn = () => {
    setSigninError(false);
    setNoMatchError(false);
    if (signInEmail === "" || signInPassword === "") {
      setSigninError(true);
      <Redirect to="/" />;
    } else {
      fetch("http://localhost:3001/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            setNoMatchError(false);
            loadUser(user);
            handleLoginRegister();
            history.push("/face-detect");
          } else {
            setNoMatchError(true);
            <Redirect to="/" />;
          }
        });
    }
  };
  console.log(noMatchError);
  return (
    <div>
      <Container className="pt-5" style={{ marginTop: "12rem" }}>
        <Row className="justify-content-center">
          <Col lg="6" className={classes.signinForm} data-aos="fade-right">
            <h3 className="text-center text-light">Sign In</h3>
            <Form.Group>
              {signinError ? (
                <Alert variant="danger">Invalid email and password</Alert>
              ) : null}
              {noMatchError ? (
                <Alert variant="danger">Invalid credentials</Alert>
              ) : null}
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control
                onChange={onSignInChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                onChange={onSignInChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button
              className="mt-3"
              size="block"
              variant="primary"
              type="submit"
              onClick={onSubmitSignIn}
            >
              Sign In
            </Button>

            <h5 className="my-3 text-center text-light">
              Don't have an account? <Link to="/register">Register</Link>
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
