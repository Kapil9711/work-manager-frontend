import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import useTheme from "../utilities/Theme";
import { createContext, useState } from "react";
const ThemeContext = createContext();
import Navbar from "../components/dashboardPage/Navbar";

// styled component styles
const DashboardWrapper = styled.div`
  background: ${({ theme }) => theme["primary-100"]};
  background: linear-gradient(
    43deg,
    ${({ theme }) => theme["primary-100"]} 0%,
    ${({ theme }) => theme["primary-200"]} 48%,
    ${({ theme }) => theme["primary-300"]} 100%
  );
`;

const DashboardPage = () => {
  const [theme, setActiveTheme] = useTheme(localStorage.getItem("theme"));

  //sync theme for different tabs
  useState(() => {
    window.addEventListener("storage", (e) => setActiveTheme(e.newValue));
  }, []);

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
    <ThemeContext.Provider value={{ theme, setActiveTheme }}>
      <DashboardWrapper theme={theme} className="dashboard min-h-screen">
        <Navbar />
      </DashboardWrapper>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, DashboardPage };
