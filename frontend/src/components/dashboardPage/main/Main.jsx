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
// import Modal from "../../../utilities/Modal";

const MainWrapper = styled.main`
  width: min(100%, 1200px);
  margin-inline: auto;
  display: grid;
`;

const TastShow = styled.div`
  background-color: ${({ theme }) => {
    return theme.match;
  }};
`;

const Main = () => {
  const { setEndPoint, theme, date, tasks } = useContext(ThemeContext);
  const [value, setValue] = useState(dayjs(new Date().toDateString()));

  const nestedTask = converToNestedArr(tasks);
  console.log(tasks);

  useGSAP(() => {
    gsap.from(".box", {
      duration: 2,
      height: 0,
      ease: Expo.easeInOut,
      stagger: 0.5,
    });
  });

  return (
    <MainWrapper className="mt-10  md:grid-cols-[1fr,2fr] gap-8">
      <div className="mx-auto sm:mx-0">
        <Calendar value={value} setValue={setValue} setEndPoint={setEndPoint} />
      </div>
      <TastShow
        theme={theme}
        className="h-screen sm:h-[500px] rounded-[28px] overflow-hidden"
      >
        <section className="mt-2 px-5 flex justify-between items-center">
          <h1 className="text-white font-bold tracking-wide text-2xl ">
            {getDateAndDay(date)}
          </h1>

          <p className="tracking-wide text-xl  font-bold text-white">
            Tasks-{tasks.length}
          </p>
          <p> dffdfsffdfdsakfds</p>
        </section>
        <div
          style={{ scrollbarWidth: "none" }}
          className={`box  pb-20 mt-4  overflow-scroll  h-full rounded-[28px] ${
            theme.light ? "bg-[#f6d6d3]" : "bg-[#f8c4c4]"
          } `}
        >
          <MainHeader setValue={setValue} />
          <div className="relative z-10 flex flex-col gap-8  ">
            {nestedTask.map((tasks, i) => (
              <Box
                tasks={tasks}
                key={tasks[0].id}
                position={i % 2 === 0 ? "self-end" : "self-start"}
              />
            ))}
          </div>
        </div>
      </TastShow>
    </MainWrapper>
  );
};

export default Main;
