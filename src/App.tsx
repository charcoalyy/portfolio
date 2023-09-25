import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ThinkRF from "./components/pages/dev/ThinkRF";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev/thinkrf" element={<ThinkRF />} />
      </Routes>
    </Router>
  );
};

export default App;
