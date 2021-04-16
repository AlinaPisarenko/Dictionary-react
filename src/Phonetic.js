import React from "react";
import "./Phonetic.css";
import Audio from "./Audio";

export default function Phonetic(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetic">
      <span>{props.phonetic.text} </span>|
      <Audio audio={props.phonetic.audio} />
    </div>
  );
}
