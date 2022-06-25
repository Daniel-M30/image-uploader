import React from "react";
import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";

import "../styles/pages/LoadImage.css";

export function LoadImage() {
  return (
    <>
      <MainContainer className="loadImage">
        <h1>Uploading...</h1>
        <div>
          <div />
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
