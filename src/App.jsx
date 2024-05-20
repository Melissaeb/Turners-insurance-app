import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import VehicleRecognition from "./components/VehicleRecognition/VehicleRecognition";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <VehicleRecognition />
      <Footer />
    </div>
  );
}

export default App;
