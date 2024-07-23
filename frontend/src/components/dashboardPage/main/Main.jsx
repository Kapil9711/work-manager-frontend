import styled from "styled-components";
import Calendar from "../../../utilities/Calendar";
import { useContext } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import getDateAndDay from "../../../utilities/getDateandDay";
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
  const { setEndPoint, theme, date } = useContext(ThemeContext);

  return (
    <MainWrapper className="mt-10  md:grid-cols-[1fr,2fr] gap-8">
      <div className="mx-auto sm:mx-0">
        <Calendar setEndPoint={setEndPoint} />
      </div>
      <TastShow
        theme={theme}
        className=" min-h-[500px] rounded-[28px] overflow-hidden"
      >
        <section className="mt-2 px-5 ">
          <h1 className="text-white font-bold tracking-wide text-lg underline">
            {getDateAndDay(date)}
          </h1>
        </section>
        <div
          className={`mt-4  h-full rounded-[28px] ${
            theme.light ? "bg-[#f6d6d3]" : "bg-[#f8c4c4]"
          } `}
        ></div>
      </TastShow>
    </MainWrapper>
  );
};

export default Main;
