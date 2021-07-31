import { useState } from "react";
import { Alert } from "react-bootstrap";
import Clarifai from "clarifai";
import { Button, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FaceDetection from "../FaceDetection/FaceDetection";

// The code below is to create a Clarifai.App instance which you interact with the client.
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_FACE_DETECT_API,
});

const ImageLinkForm = ({ user, setUser }) => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const [apiError, setApiError] = useState(null);
  // Bounding Box
  const [boxes, setBoxes] = useState([]);

  // Calculates face location
  const calculateFaceLocation = (data) => {
    const boundingBox = data.outputs[0].data.regions.map(
      (region) => region.region_info.bounding_box
    );
    // const boundingBox =
    //   data.outputs[0].data.regions[0].region_info.bounding_box;
    // Grabbing the width and height of the image entered

    const faceImage = document.getElementById("input-image");
    const width = Number(faceImage.width);
    const height = Number(faceImage.height);

    return boundingBox.map((face) => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - face.right_col * width,
        bottomRow: height - face.bottom_row * height,
      };
    });

    // const faceBox = {
    //   leftCol: boundingBox.left_col * width,
    //   topRow: boundingBox.top_row * height,
    //   rightCol: width - boundingBox.right_col * width,
    //   bottomRow: height - boundingBox.bottom_row * height,
    // };

    // console.log(boundingBox);
    // setBox(faceBox);
  };

  const displayFaceBox = (data) => {
    setBoxes(data);
  };

  const handleInputChange = (e) => {
    if (e.target.value !== imageUrl) {
      setImageUrl(null);
    }
    setInput(e.target.value);
  };

  const onImageSubmit = () => {
    if (input && input.includes("http")) {
      setError(null);
      setApiError(null);
      setBoxes([]);
      setImageUrl(input);
      // How you would send image URLS and receive back predictions from our Face Dectection model.
      app.models
        .predict(Clarifai.FACE_DETECT_MODEL, input)
        .then((response) => {
          if (response) {
            fetch("https://evening-brook-88624.herokuapp.com/image", {
              method: "put",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: user.id,
              }),
            })
              .then((response) => response.json())
              .then((count) => setUser(Object.assign(user, { entries: count })))
              .catch(console.log);
          }
          displayFaceBox(calculateFaceLocation(response));
        })
        .catch((err) => {
          setImageUrl(null);
          setApiError("Invalid URL. Please try again.");
        });
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
              <h2 className="text-white mb-4">{user.entries}</h2>
              <h5 className="form-title">
                Detect the face of an image. Give it a try!
              </h5>
            </Form.Label>
            <Form.Control
              className="w-75 form-input"
              type="text"
              placeholder="Enter an image URL"
              onChange={handleInputChange}
            />
            <Button
              variant="danger"
              className="form-btn mt-3"
              onClick={onImageSubmit}
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
                <Alert.Heading>
                  <h5 className="alert-heading">Whoops!</h5>
                </Alert.Heading>
                {error ? (
                  <p className="alert-msg">{error}</p>
                ) : (
                  <p className="alert-msg">{apiError}</p>
                )}
              </Alert>
            ) : null}
          </div>
          <FaceDetection boxes={boxes} imageUrl={imageUrl} />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageLinkForm;
