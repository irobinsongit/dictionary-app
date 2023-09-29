import React from "react";

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
      {props.phonetic.text}
    </div>
  );
}
