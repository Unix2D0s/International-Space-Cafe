import "../modules/Carousel.css";
import { useState } from "react";

export default function Carousel({ imageArray }) {
  const [currentImage, setCurrentImage] = useState(0);
  const next = () => {
    if (currentImage != imageArray.length - 1)
      setCurrentImage(currentImage + 1);
  };
  const previous = () => {
    if (currentImage != 0) setCurrentImage(currentImage - 1);
  };
  return (
    <>
      <div className="carousel_container">
        {imageArray.map((src, index) => {
          return (
            <img
              src={src}
              key={index}
              className={index === currentImage ? "image current" : "image"}
            />
          );
        })}
      </div>
      <h3>Carousel slide</h3>
      <button className="button-next" onClick={next}>
        next
      </button>
      <button className="button-previous" onClick={previous}>
        previous
      </button>
    </>
  );
}
