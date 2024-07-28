import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useContext } from "react";
import { ThemeContext } from "../page/DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask, setTasks } from "../redux/task/taskSlice";

export default function Calendar({ value, setValue }) {
  const userId = useSelector(({ user }) => user.id);
  const isMonth = useSelector(({ task }) => task.isGetByMonth);
  const key = useSelector(({ task }) => task.key);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const endPoint = `/tasks?date=${value.format("YYYY-MM-DD")}${
      isMonth ? "&&filter=month" : ""
    }`;
    dispatch(fetchTask({ endPoint, userId }));
  }, [key]);

  React.useEffect(() => {
    const endPoint = `/tasks?date=${value.format("YYYY-MM-DD")}${
      isMonth ? "&&filter=month" : ""
    }`;
    const persist = JSON.parse(localStorage.getItem(userId + endPoint));
    console.log("persist", persist);
    if (persist) dispatch(setTasks(persist));
    else dispatch(fetchTask({ endPoint, userId }));
  }, [value, isMonth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            sx={{
              "& .MuiPickersDay-root": {
                color: theme.light ? "black" : "white",
                fontSize: "15px",

                "&.Mui-selected": {
                  backgroundColor: theme.green,
                  color: "black",
                  fontWeight: "bold", // Your custom background color
                  "&:hover": {
                    backgroundColor: theme.green,
                    color: "black", // Custom hover color
                  },
                },
              },
            }}
            className={` rounded-[28px] py-0  ${
              theme.light
                ? "bg-[#f38d7f] text-[black]"
                : "bg-[#d73d1b] text-[white]"
            }`}
            value={value}
            onChange={(newValue) => {
              // const dateString = getFormatedDateString(
              //   newValue.$D,
              //   newValue.$M + 1,
              //   newValue.$y
              // );
              setValue(newValue);
              // setEndPoint(`/tasks?date=${dateString + "-" + newValue.$W}`);
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
