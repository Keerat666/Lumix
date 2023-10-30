import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Documentation from "./pages/documentation";
import Contributors from "./pages/contributors";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Documentation />} /> {/* Home page */}
          <Route path="/contributors" element={<Contributors />} />{" "}
          {/* Contributors page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
