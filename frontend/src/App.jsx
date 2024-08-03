import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Discovery from "./pages/Discovery/index.jsx";
import AttractionDetail from "./pages/AttractionDetail/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/attractions/:attraction_name" element={<AttractionDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
