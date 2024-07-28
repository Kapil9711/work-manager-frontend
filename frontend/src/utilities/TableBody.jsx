import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
const TableRowComponent = ({ task, columns, theme }) => {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setUpdate((prev) => !prev);
    }, 1000);
  }, []);

  // let bgClr = "#f29284";
  // if (task.priority === "Low") bgClr = "#e2f4b2";
  // if (task.priority === "Moderate") bgClr = "#fbec89";

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={task._id}>
      {columns.map((column) => {
        let value;
        if (column.id === "createdAt")
          value = dayjs(task[column.id]).format("DD-MM-YYYY");
        else if (column.id === "completed") value = task[column.id].toString();
        else if (column.id === "remaningTime") {
          const crntDate = dayjs(new Date());
          const trgtDate = dayjs(task.targetDateTime);
          const minutes = trgtDate.diff(crntDate, "minute");
          const seconds = trgtDate.diff(crntDate, "second");
          if (task.completed) value = "completed";
          else if (Number(minutes) < 0) value = "overdue";
          else
            value = `${Math.floor(minutes / 60)}:${minutes % 60}:${
              seconds % 60
            }`;
        } else value = task[column.id];

        let clr = "";

        if (column.id === "title") value = value.slice(0, 10);

        if (value === "overdue") clr = "red";
        else if (value === "completed") clr = "green";
        else if (value === "true") clr = "green";
        else if (value === "Low") clr = "green";
        else if (value === "Moderate") clr = "#fba004";
        else if (value === "High") clr = "#f33417";
        else clr = "black";
        return (
          <TableCell
            sx={{
              color: `${clr}`,
              fontWeight: `${
                column.id === "title" || value === "completed"
                  ? "bold "
                  : "normal"
              }`,
              letterSpacing: `${column.id === "title" ? "1px" : ".5px"}`,
              backgroundColor: "#ffe3e0",
            }}
            key={column.id}
            align={column.align}
          >
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableRowComponent;
