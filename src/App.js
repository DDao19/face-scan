import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/Navigation/Navigation";
import Rank from "./components/Rank/Rank";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <ImageLinkForm />
    </div>
  );
};

export default App;
