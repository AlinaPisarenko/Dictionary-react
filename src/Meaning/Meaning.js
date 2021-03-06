import React from "react";
import "./Meaning.css";
import Synonyms from "../Synonyms/Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key="index">
            <p>
              {definition.definition}
              <br />

              <em>{definition.example}</em>
            </p>

            <Synonyms synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
