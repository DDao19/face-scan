import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import FaceDetectionPage from "./pages/FaceDetectionPage";
import { Switch, Route } from "react-router-dom";

import Particles from "react-particles-js";
import Footer from "./components/Footer/Footer";

const App = () => {
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
      <Particles className="particles" params={options} />
      <Switch>
        <Route path="/face-detection">
          <FaceDetectionPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
