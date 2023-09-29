import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        className="Audio"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        🔊
      </a>
      <span className="Text">{props.phonetic.text}</span>
    </div>
  );
}
