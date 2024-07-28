import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../../page/DashboardPage";

const ButtonWrapper = styled.button`
  background-color: ${({ theme, active, compare }) => {
    if (active === compare) return theme["primary-600"];
    return theme["primary-300"];
  }};
  color: ${({ theme, active, compare }) => {
    if (active === compare) return theme.white;
    return theme.gray;
  }};
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme["primary-600"]};
    color: ${({ theme }) => theme.white};
  }
`;

const Button = ({ children, active, setActive }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ButtonWrapper
      onClick={() => setActive(children)}
      compare={children}
      active={active}
      theme={theme}
      className={`rounded-full py-[10px] px-[24px] font-bold tracking-wide text-center`}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
