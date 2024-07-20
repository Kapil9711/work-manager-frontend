import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expo } from "gsap";

const Texts = () => {
  useGSAP(() => {
    gsap.to(".text-1", {
      duration: 2,
      x: 80,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    gsap.to(".text-2", {
      delay: 0.4,
      duration: 2,
      x: 34,
      opacity: 1,
      ease: Expo.easeInOut,
    });
  });
  return (
    <>
      <h1
        style={{ WebkitTextStrokeWidth: "2px" }}
        className="hidden sm:block z-20 italic opacity-0 text-1 absolute text-5xl uppercase  top-48 left-80 -ml-5 text-white"
      >
        ontime
      </h1>
      <h1
        style={{ WebkitTextStrokeWidth: "4px" }}
        className="hidden sm:block italic opacity-0 text-2 top-64 mt-4 left-1/2 -ml-24 text-white  absolute uppercase text-6xl"
      >
        everything
      </h1>
    </>
  );
};

export default Texts;
