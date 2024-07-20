import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expo } from "gsap";
import pattern1 from "../../../images/bgremoved.png";
import Runner from "../../../images/Runner.png";

const Images = ({ height }) => {
  useGSAP(() => {
    gsap.from(".pattern .img1", {
      delay: 0.8,
      duration: 2,
      width: 0,
      opacity: 0,
      x: -60,
      ease: Expo.easeInOut,
    });
    gsap.from(".runner", {
      delay: 1.6,
      duration: 2,
      x: -90,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });
  return (
    <section className=" h-full sm:ml-40  sm:w-5/12 ">
      <section
        className={`pattern absolute ${height < 700 ? "top-32" : "top-36"} `}
      >
        <img
          className="img1 -z-10 "
          src={pattern1}
          alt="background image"
        ></img>
      </section>

      <section className="z-10 h-full  absolute -top-4 -left-10 sm:top-16   sm:h-5/6 sm:left-24  runner ">
        <img
          className="bg-cover object-cover h-full"
          src={Runner}
          alt="runner"
        ></img>
      </section>
    </section>
  );
};

export default Images;
