import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonym">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="List">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
