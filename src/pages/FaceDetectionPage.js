import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";

const FaceDetectionPage = ({ user, setUser }) => {
  return (
    <div>
      <Rank user={user} />
      <ImageLinkForm user={user} setUser={setUser} />
    </div>
  );
};

export default FaceDetectionPage;
