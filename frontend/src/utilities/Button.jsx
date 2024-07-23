import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../page/DashboardPage";

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => {
    return theme["primary-300"];
  }};
  color: ${({ theme }) => theme.gray};
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme["primary-600"]};
    color: ${({ theme }) => theme.white};
  }
`;

const Button = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ButtonWrapper
      theme={theme}
      className={`rounded-full py-[10px] px-[24px] font-bold tracking-wide text-center`}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
