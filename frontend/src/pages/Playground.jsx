import Carousel from "../components/Carousel";
import blueImage from "../assets/images.png";
import pinkImage from "../assets/111519.png";
export default function Playground() {
  return (
    <>
      <Carousel imageArray={[pinkImage, pinkImage, blueImage, pinkImage]} />
    </>
  );
}
