import React from "react";
import { InsertImage } from "./pages/InsertImage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import { LoadImage } from "./pages/LoadImage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsertImage />} />
          <Route path="/load" element={<LoadImage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
