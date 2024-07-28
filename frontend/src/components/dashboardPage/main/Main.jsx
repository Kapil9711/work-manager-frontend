import styled from "styled-components";
import Calendar from "../../../utilities/Calendar";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import getDateAndDay from "../../../utilities/getDateandDay";
import Box from "./Box";
import MainHeader from "./MainHeader";
import converToNestedArr from "../../../utilities/convertTaskintoNestedArr";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";
import dayjs from "dayjs";
import Loading from "../../../utilities/Loading";
import { nextDate } from "../../../utilities/nextDate";
import CustomTable from "../../../utilities/Table";
import { useSelector } from "react-redux";
// import Modal from "../../../utilities/Modal";

const MainWrapper = styled.main`
  width: min(100%, 1500px);
  margin-inline: auto;
  display: grid;
`;

const TastShow = styled.div`
  background-color: ${({ theme }) => {
    return theme.match;
  }};
`;

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Main = () => {
  const { theme, date, height, width } = useContext(ThemeContext);
  const tasks = useSelector((state) => state.task.value);
  const [value, setValue] = useState(dayjs(new Date()));
  const day = daysOfWeek[date?.split("-")[3]];
  const day1 = date?.split("-")[0];
  const day2 = monthsOfYear[Number(date?.split("-")[1]) - 1];
  useGSAP(() => {
    gsap.from(".box", {
      duration: 2,
      height: 0,
      ease: Expo.easeInOut,
      stagger: 0.5,
    });
  });

  return (
    <MainWrapper
      className={`${
        height > 750 ? "mt-16" : "mt-10"
      }  lg:grid-cols-[1fr,2fr] gap-8 xl:gap-0`}
    >
      <div className="mx-auto lg:mx-0">
        <Calendar value={value} setValue={setValue} />
      </div>
      <TastShow
        theme={theme}
        className={`h-screen sm:h-[500px] ${
          height > 800 && "xl:h-[600px]"
        }  rounded-[28px] overflow-hidden`}
      >
        <section className="mt-2 px-5 flex justify-between items-center">
          <h1 className="text-white font-bold sm:tracking-wide text-lg sm:text-2xl ">
            {getDateAndDay(date)}
          </h1>

          <p className="tracking-wide text-sm sm:text-xl  font-bold text-white">
            Tasks-{tasks.length}
          </p>
          <p className="text-lg sm:text-2xl font-bold tracking-wide text-white">
            {" "}
            {day}
          </p>
        </section>
        <div
          style={{ scrollbarWidth: "none" }}
          className={`box   mt-4  h-full   rounded-[28px] bg-[#f3a69b] `}
        >
          <CustomTable
            tasks={tasks}
            setValue={setValue}
            day1={day1}
            day={day2}
            width={width}
            theme={theme}
          />
          {/* <MainHeader setValue={setValue} />
          {isLoading ? (
            <div className="h-40 flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <div className="relative z-10 flex flex-col gap-8  ">
              {nestedTask.length === 0 ? (
                <div className="h-40 flex justify-center items-center ">
                  <h1 className="text-3xl font-bold tracking-wider">
                    No Task Found
                  </h1>
                </div>
              ) : (
                nestedTask.map((tasks, i) => (
                  <Box
                    tasks={tasks}
                    key={tasks[0].id}
                    position={i % 2 === 0 ? "self-end" : "self-start"}
                  />
                ))
              )}
            </div>
          )} */}
        </div>
      </TastShow>
    </MainWrapper>
  );
};

export default Main;
