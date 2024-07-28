import Button from "./navbarcomponents/Button";
import styled from "styled-components";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../page/DashboardPage";
import DropDown from "./navbarcomponents/DropDown";
import { useDispatch } from "react-redux";
import { setIsGetByMonth } from "../../../redux/task/taskSlice";

//styles for nav
const Nav = styled.nav`
  width: min(100%, 1600px);
  margin-inline: auto;
`;
// styles for themebutton
const ThemeBtn = styled.button`
  background-color: ${({ theme }) =>
    theme.light ? theme["primary-600"] : theme.gray};
  color: ${({ theme }) => (theme.light ? theme["primary-100"] : "black")};
  border-radius: 50px;
  padding-inline: 20px;
  padding-block: 8px;
  &:hover {
    background-color: ${({ theme }) => (theme.light ? "#591403" : theme.white)};
    color: ${({ theme }) => (theme.light ? theme["primary-100"] : "black")};
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const Navbar = () => {
  const { setActiveTheme, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [active, setActive] = useState("Daily");

  return (
    <Nav className="navbar  bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-y-1  bg-base-100 rounded-box z-[1] mt-3  p-2 shadow"
          >
            <li>
              <Button className="btn btn-ghost text-xl">Daily</Button>
            </li>

            <li>
              <Button className="btn btn-ghost text-xl">Month</Button>
            </li>
          </ul>
        </div>
        <a
          style={{
            color: theme.light ? theme["primary-600"] : theme["primary-500"],
          }}
          className="btn btn-ghost text-2xl -ml-6 sm:ml:0   md:text-4xl font-bold italic tracking-wide"
        >
          Listify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5  ">
          <li onClick={() => dispatch(setIsGetByMonth(false))}>
            <Button
              active={active}
              setActive={setActive}
              className="btn btn-ghost text-xl"
            >
              Daily
            </Button>
          </li>

          <li onClick={() => dispatch(setIsGetByMonth(true))}>
            <Button
              active={active}
              setActive={setActive}
              className="btn btn-ghost text-xl"
            >
              Monthly
            </Button>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex sm:gap-8">
        <ThemeBtn theme={theme} onClick={() => ToggleTheme(setActiveTheme)}>
          {theme.light ? "dark" : "light"}
        </ThemeBtn>
        <a className="flex  items-center">
          <DropDown />
        </a>
      </div>
    </Nav>
  );
};

//handle theme toggle and local storage
const ToggleTheme = (setActiveTheme) => {
  setActiveTheme((prev) => {
    localStorage.setItem("theme", prev === "light" ? "dark" : "light");
    return prev === "light" ? "dark" : "light";
  });
};

export default Navbar;
