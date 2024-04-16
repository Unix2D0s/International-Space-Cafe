import "../modules/Playground.css";
import { useState } from "react";
export default function Playground() {
  const [currentClass, setCurrentClass] = useState("carousel_container");
  const transition = () => {
    if (currentClass == "carousel_container")
      setCurrentClass("carousel_container transition");
    else setCurrentClass("carousel_container");
  };
  return (
    <>
      <div className={currentClass}>
        <h3>Carousel slide</h3>
      </div>
      <button onClick={transition}>Click to start transition</button>
    </>
  );
}
