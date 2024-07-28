import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import useTheme from "../utilities/Theme";
import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();
import Navbar from "../components/dashboardPage/navbar/Navbar";
import DashboardHeader from "../components/dashboardPage/DashboardHeader";
import Main from "../components/dashboardPage/main/Main";

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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [byMonth, setByMonth] = useState(false);

  //sync theme for different tabs
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
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
    <ThemeContext.Provider
      value={{
        theme,
        setActiveTheme,
        width,
        height,
        setByMonth,
        byMonth,
      }}
    >
      <DashboardWrapper
        theme={theme}
        className="dashboard min-h-screen sm:px-5 xl:px-20"
      >
        <Navbar />
        <DashboardHeader />
        <Main />
      </DashboardWrapper>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, DashboardPage };
