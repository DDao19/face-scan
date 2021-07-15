const FaceDetection = ({ imageUrl }) => {
  return (
    <div className="text-center pt-3">
      {imageUrl ? (
        <img className="face-detection" alt="face dectection" src={imageUrl} />
      ) : null}
    </div>
  );
};

export default FaceDetection;
