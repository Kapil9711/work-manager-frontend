import { useContext, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import Modal from "../../../utilities/Modal";

const Box = ({ position, tasks }) => {
  const { theme, width } = useContext(ThemeContext);
  return (
    <div
      style={{ width: "min(95%,650px)" }}
      className={`  ${position} grid sm:grid-cols-3 gap-28 px-5`}
    >
      {tasks.map((task) => {
        return (
          <SingleBox key={task.id} task={task} theme={theme} width={width} />
        );
      })}
      {/* <div className="border-orange-800 border-2  rounded-3xl  h-20"></div>
      <div className="border-orange-800 border-2  rounded-3xl  h-20"></div> */}
    </div>
  );
};

const SingleBox = ({ task, theme, width }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className=" cursor-pointer border-orange-800 border-2 rounded-3xl "
      >
        <h1>{task.title}</h1>
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
