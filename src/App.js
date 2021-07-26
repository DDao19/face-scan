import { useEffect, useState } from "react";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import FaceDetectionPage from "./pages/FaceDetectionPage";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Particles from "react-particles-js";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const loadUser = (userData) => {
    setUser(userData);
  };

  const handleLoginRegister = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
  console.log(user);
  return (
    <div className="App">
      <Particles className="particles" params={options} />
      <Navigation
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        setUser={setUser}
      />
      {isLoggedIn ? (
        <Switch>
          <Route path="/face-detect" exact>
            <FaceDetectionPage user={user} setUser={setUser} />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <SignInPage
              handleLoginRegister={handleLoginRegister}
              loadUser={loadUser}
              user={user}
            />
          </Route>
          <Route path="/register" exact>
            <RegisterPage
              handleLoginRegister={handleLoginRegister}
              loadUser={loadUser}
            />
          </Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;
