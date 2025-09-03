import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import SliderImage from "./SliderImage";
import "./Slider.css";

const len = SliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} SliderImage={SliderImage} />{" "}
      <Arrows
        prevslide={() =>
          setActiveIndex((prevIndex) => (prevIndex === 0 ? len : prevIndex - 1))
        }
        nextslide={() =>
          setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
