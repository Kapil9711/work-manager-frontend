import { useContext, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import Modal from "../../../utilities/Modal";
import API from "../../../services/API";
import Notify from "../../../utilities/Toasts";
import dayjs from "dayjs";

const Box = ({ position, tasks }) => {
  const { theme, width, setRefresh } = useContext(ThemeContext);
  return (
    <div
      style={{ width: "min(95%,650px)" }}
      className={`  ${position} grid sm:grid-cols-3 gap-28 px-5`}
    >
      {tasks.map((task) => {
        return (
          <SingleBox
            key={task._id}
            task={task}
            theme={theme}
            width={width}
            setRefresh={setRefresh}
          />
        );
      })}
      {/* <div className="border-orange-800 border-2  rounded-3xl  h-20"></div>
      <div className="border-orange-800 border-2  rounded-3xl  h-20"></div> */}
    </div>
  );
};

const SingleBox = ({ task, theme, width, setRefresh }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dateObj = dayjs(task.targetDateTime);
  let timeRange = dateObj.format("h") + dateObj.format("A");
  const nextHourDate = dateObj.add(1, "hour");
  timeRange += "-" + nextHourDate.format("h") + nextHourDate.format("A");

  const handleChange = async (e) => {
    const bodyData = {
      completed: e.target.checked,
    };
    const data = await API.updateTask(`/tasks/${task._id}`, bodyData);

    if (data.success) {
      Notify("success", "updated Successfullu");
      setRefresh((prev) => !prev);
    } else Notify("error", data.message);
  };

  return (
    <div>
      <div
        onClick={() => {
          if (width < 1100) return;
          setIsOpen(true);
        }}
        style={{
          backgroundColor: task.completed ? theme.green : theme.white,
          height: "112px",
        }}
        key={task.id}
        className=" cursor-pointer border-t-4 border-b-4 border-l-[1px] border-r-[1px] shadow-md shadow-black border-black rounded-2xl transition-all duration-200 ease-out"
      >
        <h1 className="text-center text-xl font-bold">
          {task.title.slice(0, 8)}
        </h1>
        <p className="text-center text-lg font-extrabold tracking-wider ">
          {timeRange}
        </p>
        <div onClick={(e) => e.stopPropagation()} className="form-control px-2">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={task.completed}
              className="checkbox checkbox-success"
              onChange={handleChange}
            />
            <span className="label-text font-bold">Completed</span>
          </label>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          children
        </Modal>
      )}
    </div>
  );
};

export default Box;
