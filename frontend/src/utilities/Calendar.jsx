import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import getFormatedDateString from "./getDateString";
import { useContext } from "react";
import { ThemeContext } from "../page/DashboardPage";

export default function Calendar({ setEndPoint }) {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = React.useState(dayjs(new Date().toDateString()));

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
                  // "&:hover": {
                  //   backgroundColor: theme.green,
                  //   color: "black", // Custom hover color
                  // },
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
              const dateString = getFormatedDateString(
                newValue.$D,
                newValue.$M + 1,
                newValue.$y
              );
              setValue(newValue);
              setEndPoint(`/tasks?date=${dateString + "-" + newValue.$W}`);
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
