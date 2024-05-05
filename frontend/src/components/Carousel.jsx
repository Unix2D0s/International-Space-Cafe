import "../modules/Carousel.css";
import { useState } from "react";

export default function Carousel({ imageArray }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationPlayState, setAnimationPlayState] = useState("paused");

  const next = () => {
    if (currentImage != imageArray.length - 1) {
      setAnimationPlayState("running");
      setCurrentImage(currentImage + 1);
    }
  };
  const previous = () => {
    if (currentImage != 0) {
      setCurrentImage(currentImage - 1);
      setAnimationPlayState("running");
    }
  };
  return (
    <>
      <div className="carousel_flex_container">
        {imageArray.map((src, index) => {
          return (
            <div
              key={index}
              className={index === currentImage ? "image current" : "image"}
              style={{
                animationPlayState: animationPlayState,
              }}
            >
              <img src={src} />
            </div>
          );
        })}
      </div>
      <button className="arrow left" onClick={previous}>
        &#8592;
      </button>
      <button className="arrow right" onClick={next}>
        &#8594;
      </button>
    </>
  );
}
