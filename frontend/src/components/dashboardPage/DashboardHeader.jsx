import styled from "styled-components";
import { useContext, useState } from "react";
import { ThemeContext } from "../../page/DashboardPage";
import Modal from "../../utilities/Modal";

const DashHeader = styled.nav`
  width: min(100%, 1200px);
  margin-inline: auto;
`;

const DashboardHeader = () => {
  const { theme, width } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashHeader className="flex justify-between items-center px-4 sm:px-0  mt-5">
      <div>
        <h1 className="text-xl text-white sm:text-3xl font-bold tracking-wide">
          My Calendar
        </h1>

        <p className="hidden sm:block text-gray-100">
          information designed to accurate insights
        </p>
      </div>
      {/* <p className="text-white text-2xl">Welcome, {user.username}</p> */}

      <button
        onClick={() => {
          if (width < 1100) return;
          setIsOpen(true);
        }}
        className={`text-xl  text-white py-3 px-6 rounded-full   ${
          theme.light
            ? "bg-orange-800 hover:bg-orange-600"
            : "bg-[#f46645] hover:bg-orange-500"
        }`}
      >
        + Add Task
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen}>Children</Modal>}
    </DashHeader>
  );
};

export default DashboardHeader;
