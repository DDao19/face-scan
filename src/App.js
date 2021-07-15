import { useState } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
import FaceDetection from "./components/FaceDetection/FaceDetection";

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm
        input={input}
        setInput={setInput}
        setImageUrl={setImageUrl}
      />
      <FaceDetection imageUrl={imageUrl} />
    </div>
  );
};

export default App;
