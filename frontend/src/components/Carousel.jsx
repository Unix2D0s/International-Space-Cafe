import "../modules/Carousel.css";
import { useState } from "react";

export default function Carousel({ imageArray }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationPlayState, setAnimationPlayState] = useState("paused");
  const [buttonVisibility, setButtonVisibility] = useState(false);

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
  const showButtons = () => {
    setButtonVisibility(true);
  };
  const hideButtons = () => {
    setButtonVisibility(false);
  };
  return (
    <>
      <div className="carousel_container">
        <div
          className="carousel_flex_container"
          onMouseEnter={showButtons}
          onMouseOut={hideButtons}
        >
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

        <button
          className={buttonVisibility ? "arrow left" : "arrow left invisible"}
          onClick={previous}
        >
          &#8592;
        </button>
        <button
          className={buttonVisibility ? "arrow right" : "arrow right invisible"}
          onClick={next}
        >
          &#8594;
        </button>
      </div>
    </>
  );
}
