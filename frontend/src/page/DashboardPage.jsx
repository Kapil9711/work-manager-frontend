import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import useTheme from "../utilities/Theme";
import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();
import Navbar from "../components/dashboardPage/Navbar";
import API from "../services/API";

import Loading from "../utilities/Loading";
import Notify from "../utilities/Toasts";
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
  const [endPoint, setEndPoint] = useState("/tasks");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [width, setWidth] = useState(0);

  //sync theme for different tabs
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("storage", (e) => setActiveTheme(e.newValue));
    const getUser = async () => {
      const data = await API.getUserProfile();
      setUser(data.data);
    };
    getUser();
  }, []);

  useEffect(() => {
    console.log(endPoint);
    const getData = async () => {
      setIsLoading(true);
      const data = await API.getTasks(endPoint);
      if (data.success) {
        setIsLoading(false);
        localStorage.setItem("tasks" + endPoint, JSON.stringify(data.data));
        setTasks(data.data);
      } else {
        setIsLoading(false);
        setTasks([]);
      }
    };
    getData();
  }, [endPoint]);

  useGSAP(() => {
    gsap.from(".dashboard", {
      duration: 2,
      opacity: 0,
      scale: 0.7,
      x: 1200,
      ease: Expo.easeInOut,
    });
  });

  const date = endPoint.split("date=")[1];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setActiveTheme,
        setEndPoint,
        date,
        user,
        setUser,
        tasks,
        width,
      }}
    >
      <DashboardWrapper theme={theme} className="dashboard min-h-screen">
        <Navbar />
        <DashboardHeader />
        <Main />
      </DashboardWrapper>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, DashboardPage };

// {isLoading ? (
//   <div className="flex min-h-screen justify-center items-center">
//     <Loading />
//   </div>
// ) : (
//   <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
//     {tasks.map((task) => {
//       return <h1 key={task.id}>{task.title}</h1>;
//     })}
//     {tasks.length === 0 && <h1>No Task Found</h1>}
//   </div>
// )}
