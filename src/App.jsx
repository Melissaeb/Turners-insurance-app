import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import VehicleRecognition from "./components/VehicleRecognition/VehicleRecognition";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Redirects to AutoDetect Vehicle recognition from / */}
        <Route
          path="/"
          element={
            <Navigate
              to={"/Cars/finance-insurance/car-insurance/autodetect/"}
            />
          }
        />
        <Route
          path="/:section/finance-insurance/car-insurance/autodetect/"
          element={<VehicleRecognition />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
