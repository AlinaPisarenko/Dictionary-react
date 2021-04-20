import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <section className="col-4">
            <div className="Results-info">
              <h2>{props.results.word}</h2>

              <Phonetic phonetic={props.results.phonetics[0]} />
            </div>
          </section>
          <section className="col-8">
            <div className="Results-info">
              {props.results.meanings.map(function (meaning, index) {
                return (
                  <div key={index}>
                    <Meaning meaning={meaning} />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
