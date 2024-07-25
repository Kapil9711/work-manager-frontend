import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import { nextDate, prevDate } from "../../../utilities/nextDate";
import dayjs from "dayjs";

const MainHeader = ({ setValue }) => {
  const { date } = useContext(ThemeContext);
  const day = Number(date?.split("-")[0]);
  const month = date?.split("-")[1];
  const year = date?.split("-")[2];
  const today = day ? new Date(year + "-" + month + "-" + day) : new Date();
  const Date1 = nextDate(today);
  const Date2 = nextDate(Date1);
  const prev1 = prevDate(today);
  const prev2 = prevDate(prev1);

  const date1 = prev2.getDate();
  const date2 = prev1.getDate();
  const date3 = today.getDate();
  const date4 = Date1.getDate();
  const date5 = Date2.getDate();

  useEffect(() => {
    setActive(today.getDate());
  }, [date]);

  const [active, setActive] = useState(date3);

  const dateArr = [prev2, prev1, today, Date1, Date2];
  const arr = [date1, date2, date3, date4, date5];

  return (
    <div className="h-16 sticky  z-20 top-0 mb-5 flex sm:px-24 justify-around items-center  sm:gap-10 bg-[#f38e81]  w-full transition-all duration-1000 ease-out">
      {arr.map((date, i) => (
        <p
          onClick={() => {
            setActive(date);
            setValue(dayjs(dateArr[i]));
          }}
          key={date}
          className={`h-12  cursor-pointer ${
            active != date && "hover:bg-red-200"
          }  ${
            active === date && "bg-red-500 scale-110"
          }  relative w-12 flex items-center justify-center rounded-full`}
        >
          <span
            style={{ fontSize: active === date ? "28px" : "18px" }}
            className={`text-white  ${
              active === date && "font-bold"
            } select-none `}
          >
            {date}
          </span>
          <span
            className={`${
              active === date && "border-t-[56px] border-transparent"
            }  absolute -top-10 -z-10 h-28 w-28    rounded-t-full `}
          ></span>
        </p>
      ))}
    </div>
  );
};

export default MainHeader;
