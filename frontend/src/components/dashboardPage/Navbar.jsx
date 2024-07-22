import Button from "../../utilities/Button";
import starImg from "../../images/texture.jpg";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../page/DashboardPage";

const Nav = styled.nav`
  width: min(100%, 1200px);
  margin-inline: auto;
`;

const BtnWrapper = styled.button`
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
              <Button className="btn btn-ghost text-xl">Week</Button>
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
          className="btn btn-ghost text-4xl   md:text-5xl font-bold italic tracking-wider"
        >
          Listify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5  ">
          <li>
            <Button className="btn btn-ghost text-xl">Daily</Button>
          </li>
          <li>
            <Button className="btn btn-ghost text-xl">Weekly</Button>
          </li>
          <li>
            <Button className="btn btn-ghost text-xl">Monthly</Button>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <BtnWrapper
          theme={theme}
          onClick={() => {
            setActiveTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
        >
          {theme.light ? "dark" : "light"}
        </BtnWrapper>
        <a>
          <img className="rounded-full w-11 h-11" src={starImg} alt="starImg" />
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
