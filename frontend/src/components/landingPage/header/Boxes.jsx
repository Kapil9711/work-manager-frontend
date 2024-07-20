import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expo } from "gsap";

const Boxes = ({ height }) => {
  useGSAP(() => {
    gsap.from(".box1", {
      delay: 1,
      duration: 4,
      x: -150,
      rotate: 200,
      transformOrigin: "50% 50%",
      opacity: 0,
      ease: Expo.easeInOut,
    });
    gsap.from(".box3", {
      delay: 1,
      duration: 4,
      x: -150,
      rotate: 90,
      opacity: 0,
      transformOrigin: "50% 50%",

      ease: Expo.easeInOut,
    });
    gsap.from(".box2", {
      delay: 1.2,
      duration: 4,
      x: -150,
      rotate: 180,
      opacity: 0,
      transformOrigin: "50% 50%",

      ease: Expo.easeInOut,
    });
  });
  return (
    <>
      <div
        className={`hidden sm:block box1 absolute ${
          height < 700 ? "top-24" : "top-32"
        }  left-48 rotate-45 w-16 h-16 border-2 border-orange-500`}
      ></div>
      <div className="hidden sm:block rotate-45 box2 absolute bottom-28 left-16 h-28 w-28 bg-orange-500 border-2 border-orange-400"></div>
      <div className="hidden sm:block rotate-45 box3 h-20 w-20 absolute bottom-96 right-40 border-2 border-orange-500"></div>
    </>
  );
};

export default Boxes;
