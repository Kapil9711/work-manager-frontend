import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import theme from "../utilities/Theme";
import { useState } from "react";

const DashboardWrapper = styled.div`
  background: ${theme["primary-100"]};
  background: linear-gradient(
    43deg,
    ${theme["primary-100"]} 0%,
    ${theme["primary-200"]} 48%,
    ${theme["primary-300"]} 100%
  );
`;

const DashboardPage = () => {
  const [toggleTheme, setToggleTheme] = useState("");

  useGSAP(() => {
    gsap.from(".dashboard", {
      duration: 2,
      opacity: 0,
      scale: 0.7,
      x: 1200,
      ease: Expo.easeInOut,
    });
  });
  return (
    <DashboardWrapper className="dashboard min-h-screen bg-pink-500 flex justify-center items-center">
      <h1 className="text-4xl">Dashboard Page</h1>
    </DashboardWrapper>
  );
};

export default DashboardPage;
