import React from "react";
import { InsertImage } from "./pages/InsertImage";
import { SuccessLoad } from "./pages/SuccessLoad";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InsertImage />} />
          <Route path="/success" element={<SuccessLoad />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={false} position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
