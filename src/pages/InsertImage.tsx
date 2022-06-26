import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";

import "../styles/pages/InsertImage.css";
import { DragDrop } from "../components/DragDrop";
import { api } from "../libs/api";
import { LoadImage } from "./LoadImage";

export function InsertImage() {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  function _handleClickButton() {
    document.getElementById("inputFile")?.click();
  }

  function _handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target && event.target.files) setFile(event.target.files[0]);
  }

  useEffect(() => {
    async function uploadImage() {
      if (file) {
        const body = new FormData();
        body.append("file", file);
        const { data } = await api.post("/upload", body);
        navigate("/success", {
          state: {
            fileUpload: data.data,
          },
        });

        setFile(null);
      }
    }

    uploadImage();
  }, [file, navigate]);

  if (file) return <LoadImage />;

  return (
    <>
      <MainContainer className="insertImage">
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png,...</p>
        <DragDrop uploadImage={setFile} />
        <span>Or</span>
        <button onClick={_handleClickButton}>Choose a file</button>
        <input
          id="inputFile"
          hidden
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          onChange={_handleChangeFile}
        />
      </MainContainer>
      <Footer />
    </>
  );
}
