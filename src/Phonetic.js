import React from "react";

import Audio from "./Audio";

export default function Phonetic(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <Audio audio={props.phonetic.audio} />
    </div>
  );
}
