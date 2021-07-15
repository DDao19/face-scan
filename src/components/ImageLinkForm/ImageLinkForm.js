import { useState } from "react";
import { Alert } from "react-bootstrap";
import Clarifai from "clarifai";
import { Button, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// the code below is to create a Clarifai.App instance which you interact with the client.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_FACE_DETECT_API,
});

const ImageLinkForm = ({ setImageUrl, input, setInput }) => {
  const [error, setError] = useState(null);
  const [apiError, setApiError] = useState(null);

  // handles the entered image url
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    // Set the inputUrl to the imageUrl state. Also check if valid URL
    if (input && input.includes("http")) {
      setError(null);
      setApiError(null);
      setImageUrl(input);
      // How you would send image URLS and receive back predictions from our Face Dectection model.
      app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
        (response) => {
          const boundingBox =
            response.outputs[0].data.regions[0].region_info.bounding_box;
          console.log(boundingBox);
        },
        (err) => {
          setImageUrl(null);
          setApiError("Invalid URL. Please try again.");
        }
      );
    } else {
      setError("Please enter a valid image URL.");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center form">
            <Form.Label>
              <h5 className="form-title">
                Detect the face of an image. Give it a try!
              </h5>
            </Form.Label>
            <Form.Control
              className="w-75 form-input"
              type="text"
              placeholder="Enter an image URL"
              onChange={handleChange}
            />
            <Button
              variant="danger"
              className="form-btn mt-3"
              onClick={handleButtonClick}
            >
              Detect Face <i className="far fa-meh-blank"></i>
            </Button>
            {error || apiError ? (
              <Alert
                variant="danger"
                className="mt-4 w-75 alert"
                onClose={() => {
                  setError(null);
                  setApiError(null);
                  return;
                }}
                dismissible
              >
                <Alert.Heading>Whoops!</Alert.Heading>
                {error ? <p>{error}</p> : <p>{apiError}</p>}
              </Alert>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageLinkForm;
