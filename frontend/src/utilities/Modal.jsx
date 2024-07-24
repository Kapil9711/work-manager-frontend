import ReactDom from "react-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../page/DashboardPage";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme["primary-100"]};
  background: linear-gradient(
    43deg,
    ${({ theme }) => (theme.light ? theme["primary-100"] : "#ffe4e1")} 0%,
    ${({ theme }) => (theme.light ? theme["primary-200"] : "#f89487")} 48%,
    ${({ theme }) => (theme.light ? theme["primary-300"] : "#f46645")} 100%
  );
`;

const Modal = ({ setIsOpen, children }) => {
  const { theme } = useContext(ThemeContext);
  return ReactDom.createPortal(
    <div
      style={{
        background: "rgba(9, 8, 8,.8)",
      }}
      className="hidden  absolute sm:flex bg-[] justify-center items-center z-50 top-[400px] sm:top-0 h-screen w-screen"
    >
      <Wrapper
        theme={theme}
        className=" w-[95%] h-[70%] sm:w-[70%] sm:h-[90%] rounded-3xl relative"
      >
        {children}
        <button
          className="absolute top-0 right-5  text-white btn btn-ghost  text-5xl"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </Wrapper>
    </div>,

    document.getElementById("portal")
  );
};

export default Modal;
