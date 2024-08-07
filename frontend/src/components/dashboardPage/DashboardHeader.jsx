import styled from "styled-components";
import { useContext, useState } from "react";
import { ThemeContext } from "../../page/DashboardPage";
import Modal from "../../utilities/Modal";
import AddTask from "./AddTask";

const DashHeader = styled.nav`
  width: min(100%, 1500px);
  margin-inline: auto;
`;

const DashboardHeader = () => {
  const { theme, width, height } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashHeader
      className={`flex justify-between items-center px-4 sm:px-0 ${
        height > 750 ? "mt-10" : "mt-5"
      } `}
    >
      <div>
        <h1
          className={`text-xl text-white  ${
            width > 1500 ? "sm:text-4xl" : "sm:text-3xl"
          }  font-bold tracking-wide`}
        >
          My Calendar
        </h1>

        <p className="hidden sm:block text-gray-100 xl:mt-2">
          information designed to accurate insights
        </p>
      </div>
      {/* <p className="text-white text-2xl">Welcome, {user.username}</p> */}

      <button
        onClick={() => {
          if (width < 1100) return;
          setIsOpen(true);
        }}
        className={`text-xl  text-white py-3 px-6 ${
          width > 1500 && "xl:py-6 xl:px-12"
        } rounded-full   ${
          theme.light
            ? "bg-orange-800 hover:bg-orange-600"
            : "bg-[#f46645] hover:bg-orange-500"
        }`}
      >
        + Add Task
      </button>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>{<AddTask setIsOpen={setIsOpen} />}</Modal>
      )}
    </DashHeader>
  );
};

export default DashboardHeader;
