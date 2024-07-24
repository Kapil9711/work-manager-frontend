import { useContext, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import { nextDate, prevDate } from "../../../utilities/nextDate";

const MainHeader = () => {
  const [active, setActive] = useState(2);
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

  console.log(date1, date2, date3, date4, date5);
  const arr = [date1, date2, date3, date4, date5];

  return (
    <div className="h-16 sticky  z-20 top-0 mb-5 flex sm:px-24 justify-around items-center  sm:gap-10 bg-[#f38e81]  w-full ">
      {arr.map((date, i) => (
        <p
          onClick={() => setActive(i)}
          key={date}
          className={`h-12  cursor-pointer ${
            active != i && "hover:bg-red-500"
          }  ${
            active === i && "bg-red-500"
          }  relative w-12 flex items-center justify-center rounded-full    `}
        >
          <span
            style={{ fontSize: active === i ? "26px" : "18px" }}
            className={`text-white  ${active === i && "font-bold"} `}
          >
            {date}
          </span>
          <span
            className={`${
              active === i && "border-t-[56px] border-transparent"
            }  absolute -top-10 -z-10 h-28 w-28    rounded-t-full `}
          ></span>
        </p>
      ))}
    </div>
  );
};

export default MainHeader;
