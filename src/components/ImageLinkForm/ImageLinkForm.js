import { Button, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ImageLinkForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="text-center form">
            <Form.Group>
              <Form.Label>
                <h5 className="form-title">
                  Detect the face of an image. Give it a try!
                </h5>
              </Form.Label>
              <Form.Control
                className="w-75 form-input"
                type="text"
                placeholder="Enter an image URL"
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="form-btn mt-2">
              Detect Face <i className="far fa-meh-blank"></i>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageLinkForm;
