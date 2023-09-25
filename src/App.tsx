import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ThinkRF from "./components/pages/dev/ThinkRF";
import FyelabsExpress from "./components/pages/dev/FyelabsExpress";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev/thinkrf" element={<ThinkRF />} />
        <Route path="/dev/fyelabs-express" element={<FyelabsExpress />} />
      </Routes>
    </Router>
  );
};

export default App;
