import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          if (index === 0) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
