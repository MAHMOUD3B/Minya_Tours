import "./styles/app.css"
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Questions from "./pages/Questions";
import Redeem from "./pages/Redeem";
import MapPage from "./pages/Map";

const App = () => {
  return (
    <div className="font-playfair">
      <Routes>
        <Route path={"/"} element={<Start />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/map"} element={<MapPage />} />
        <Route path={"/questions"} element={<Questions />} />
        <Route path={"/redeem"} element={<Redeem />} />
      </Routes>
    </div>
  );
};

export default App;
