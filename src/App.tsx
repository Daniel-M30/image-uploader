import React from "react";
import { InsertImage } from "./pages/InsertImage";
import { SuccessLoad } from "./pages/SuccessLoad";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsertImage />} />
          <Route path="/success" element={<SuccessLoad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
