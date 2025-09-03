import React from "react";

function Arrows({ prevslide, nextslide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevslide}>
        &#10094;
      </span>
      <span className="next" onClick={nextslide}>
        &#10095;
      </span>
    </div>
  );
}
export default Arrows;
