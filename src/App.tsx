import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ThinkRF from "./components/pages/dev/ThinkRF";
import FyelabsExpress from "./components/pages/dev/FyelabsExpress";
import LLIF from "./components/pages/dev/LLIF";
import Stride from "./components/pages/dev/Stride";
import DirectU from "./components/pages/dev/DirectU";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dev/thinkrf" element={<ThinkRF />} />
        <Route path="/dev/fyelabs-express" element={<FyelabsExpress />} />
        <Route path="/dev/llif" element={<LLIF />} />
        <Route path="/dev/directu" element={<DirectU />} />
        <Route path="/dev/stride" element={<Stride />} />
      </Routes>
    </Router>
  );
};

export default App;
