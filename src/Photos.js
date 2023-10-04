import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="Photos">
          <a
            href={props.photos[0].src.original}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt={props.photos[0].alt}
              src={props.photos[0].src.original}
              className="img-fluid"
            />
          </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
