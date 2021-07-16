import { Col, Row } from "react-bootstrap";
import classes from "./FaceDetection.module.css";

const FaceDetection = ({ imageUrl, boxes }) => {
  // let styles = {
  //   top: box.topRow,
  //   right: box.rightCol,
  //   bottom: box.bottomRow,
  //   left: box.leftCol,
  // };

  return (
    <Row className="justify-content-sm-center">
      <Col sm="auto">
        {imageUrl ? (
          <img
            className="face-detection"
            id="input-image"
            alt="face dectection"
            src={imageUrl}
          />
        ) : null}
        {boxes.map((box, i) => {
          const { topRow, rightCol, bottomRow, leftCol } = box;
          return (
            <div
              className={classes.boundingBox}
              key={i}
              style={{
                top: topRow,
                right: rightCol,
                bottom: bottomRow,
                left: leftCol,
              }}
            ></div>
          );
        })}
      </Col>
    </Row>
  );
};

export default FaceDetection;
