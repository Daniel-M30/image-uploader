import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";
import { useLocation, useNavigate } from "react-router-dom";

import checkCircle from "../assets/check-circle-solid.svg";
import "../styles/pages/SuccessLoad.css";
import { toast } from "react-toastify";

export function SuccessLoad() {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const state = location.state as any;
    if (state && state.fileUpload) {
      setUrl(state.fileUpload);
      return;
    }

    navigate("/");
  }, [location, navigate]);

  function _handleCopyButton() {
    navigator.clipboard.writeText(url);
    toast.success("Copy to clipboard successfully!");
    navigate("/");
    location.state = null;
  }

  return (
    <>
      <MainContainer className="successLoad">
        <img src={checkCircle} alt="Circle check" />
        <h1>Uploaded Successfully!</h1>
        <img src={url} alt="Uploaded file" />
        <div>
          <p>{url}</p>
          <button onClick={_handleCopyButton}>Copy Link</button>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
