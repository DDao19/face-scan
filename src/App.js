// import { useState } from "react";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";
// import FaceDetection from "./components/FaceDetection/FaceDetection";
// Particles.js
import Particles from "react-particles-js";

const App = () => {
  // const [input, setInput] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  // PARTICLES PARAMS
  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 1,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 0.5,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 150,
          duration: 2,
          size: 0,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
  };
  // END OF PARTICLES

  return (
    <div className="App">
      <Navigation />
      <Particles className="particles" params={options} />
      <Rank />
      <ImageLinkForm />
    </div>
  );
};

export default App;
