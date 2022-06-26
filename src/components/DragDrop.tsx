import React, { DragEvent } from "react";
import imageScenario from "../assets/image.svg";

interface DragDropProps {
  uploadImage: (file: File) => void;
}

export function DragDrop({ uploadImage }: DragDropProps) {
  function dragEnter(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  function dragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  function dropItem(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    uploadImage(file);
  }

  return (
    <div
      onDragEnter={(event) => dragEnter(event)}
      onDragOver={(event) => dragOver(event)}
      onDrop={(event) => dropItem(event)}
    >
      <img src={imageScenario} alt="Scenario" />
      <span>Drag {"&"} Drop your image here</span>
    </div>
  );
}
