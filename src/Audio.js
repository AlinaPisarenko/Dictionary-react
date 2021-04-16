import React from "react";
import "./Audio.css";

export default function Audio(props) {
  return (
    <div className="Audio">
      <button
        className="btn sound"
        onClick={function () {
          const audio = document.getElementsByClassName("audioFile")[0];
          audio.play();
        }}
      >
        <i class="fas fa-volume-up"></i>
        <audio className="audioFile" src={props.audio}></audio>
      </button>
    </div>
  );
}
