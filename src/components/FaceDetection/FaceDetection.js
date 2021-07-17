import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
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
          <motion.img
            className="face-detection"
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 0.8 }}
            id="input-image"
            alt="face dectection"
            src={imageUrl}
          />
        ) : null}
        {boxes.map((box, i) => {
          const { topRow, rightCol, bottomRow, leftCol } = box;
          return (
            <motion.div
              className={classes.boundingBox}
              animate={{ scale: [1, 0.9] }}
              transition={{ duration: 0.5 }}
              key={i}
              style={{
                top: topRow,
                right: rightCol + 10,
                bottom: bottomRow,
                left: leftCol + 10,
              }}
            ></motion.div>
          );
        })}
      </Col>
    </Row>
  );
};

export default FaceDetection;
