import React from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";

import imageScenario from "../assets/image.svg";
import "../styles/pages/InsertImage.css";

export function InsertImage() {
  const navigate = useNavigate();

  function _handleClickButton() {
    navigate("/load");
  }

  return (
    <>
      <MainContainer className="insertImage">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <div>
          <img src={imageScenario} alt="Scenario" />
          <span>Drag {"&"} Drop your image here</span>
        </div>
        <span>Or</span>
        <button onClick={_handleClickButton}>Choose a file</button>
      </MainContainer>
      <Footer />
    </>
  );
}
