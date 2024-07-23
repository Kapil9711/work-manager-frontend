import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import useTheme from "../utilities/Theme";
import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();
import Navbar from "../components/dashboardPage/Navbar";
import API from "../services/API";
import Calendar from "../utilities/Calendar";

import Loading from "../utilities/Loading";

// import Notify from "../utilities/Toasts";

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
  const [endPoint, setEndPoint] = useState("/tasks?filter=false");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //sync theme for different tabs
  useEffect(() => {
    window.addEventListener("storage", (e) => setActiveTheme(e.newValue));
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await API.getTasks(endPoint);
      console.log(data);
      if (data.success) {
        setIsLoading(false);
        localStorage.setItem("tasks" + endPoint, JSON.stringify(data.data));
        setTasks(data.data);
      } else {
        setIsLoading(false);
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

  return (
    <ThemeContext.Provider value={{ theme, setActiveTheme }}>
      <DashboardWrapper theme={theme} className="dashboard min-h-screen">
        <Navbar />
        {isLoading ? (
          <div className="flex min-h-screen justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
            {tasks.map((task) => {
              return <h1 key={task.id}>{task.title}</h1>;
            })}
          </div>
        )}
        <Calendar />
      </DashboardWrapper>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, DashboardPage };
