import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../page/DashboardPage";

const Box = ({ position, tasks }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ width: "min(95%,650px)" }}
      className={` ${position} grid sm:grid-cols-3 gap-28 px-5`}
    >
      {tasks.map((task) => {
        return (
          <div
            style={{
              backgroundColor: task.completed ? theme.green : theme.white,
              height: "112px",
            }}
            key={task.id}
            className=" border-orange-800 border-2 rounded-3xl "
          >
            <h1>{task.title}</h1>
          </div>
        );
      })}
      {/* <div className="border-orange-800 border-2  rounded-3xl  h-20"></div>
      <div className="border-orange-800 border-2  rounded-3xl  h-20"></div> */}
    </div>
  );
};

export default Box;
