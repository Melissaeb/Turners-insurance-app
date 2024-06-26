import "./App.css";
import VehicleRecognition from "./components/VehicleRecognition/VehicleRecognition";
import { Routes, Route, Navigate } from "react-router-dom";
import CarInsurance from "./components/CarInsurance/CarInsurance";
import QuickQuote from "./components/QuickQuote/QuickQuote";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirects to Car insurance homepage from / */}
        <Route
          path="/"
          element={<Navigate to={"/Cars/finance-insurance/car-insurance"} />}
        />

        <Route
          path="/:section/finance-insurance/car-insurance/*"
          element={<CarInsurance />}
        >
          <Route path="autodetect" element={<VehicleRecognition />} />
          <Route path="quick-quote" element={<QuickQuote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
