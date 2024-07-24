import ReactDom from "react-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../page/DashboardPage";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme["primary-100"]};
  background: linear-gradient(
    43deg,
    ${({ theme }) => theme["primary-100"]} 0%,
    ${({ theme }) => theme["primary-200"]} 48%,
    ${({ theme }) => theme["primary-300"]} 100%
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
        className=" w-[95%] h-[70%] sm:w-[70%] sm:h-[90%] rounded-3xl"
      >
        {children}
        <button className="btn btn-accent" onClick={() => setIsOpen(false)}>
          close
        </button>
      </Wrapper>
    </div>,

    document.getElementById("portal")
  );
};

// const ModalWrappwer = ({ styles, content, children }) => {
//   const { theme } = useContext(ThemeContext);
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button className={styles} onClick={() => setIsOpen(true)}>
//         {content}
//       </button>
//       {isOpen && <Modal setIsOpen={setIsOpen}>{children}</Modal>}
//     </div>
//   );
// };

export default Modal;
