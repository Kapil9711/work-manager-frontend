import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expo } from "gsap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  overflow: hidden;

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#f97316, #f97316),
      linear-gradient(#000000, #000000), linear-gradient(#f97316, #f97316),
      linear-gradient(#000000, #000000);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: black;
    border-radius: 5px;
  }
`;

const Content = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".content", {
      delay: 2.3,
      duration: 2,
      y: 10,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    gsap.from(".content p", {
      delay: 2.4,
      duration: 2,
      y: 30,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    gsap.from(".content button", {
      delay: 2.6,
      duration: 2,
      y: 30,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  });
  return (
    <Section className="z-50  justify-center  content border-2 border-orange-500 px-2 py-4 absolute right-0 sm:right-40 bottom-1 sm:bottom-12 sm:w-96 ">
      <p className="sm:leading-7 text-sm  sm:text-lg">
        Welcome to Listify, your ultimate companion for staying organized and
        productive!
      </p>
      <button className="block max-w-60 mx-auto relative z-50">
        <span
          onClick={() => navigate("/auth")}
          className="block w-full mt-4 text-2xl hover:bg-orange-600   bg-orange-500  py-4 px-10  text-white"
          href={"/tasks"}
        >
          Get Started
        </span>
      </button>
    </Section>
  );
};

export default Content;
