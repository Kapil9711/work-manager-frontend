import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.footer`
  border-top: 2px solid #ff9416;
  .home_navigation {
    /* background-color:  #ffc00; */
  }
  .copyright {
    background-color: #964b00;
    height: 2rem;
    line-height: 2em;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Footers>
      <div className="home_navigation flex justify-center items-center py-4 min-h-32 w-full">
        <a
          style={{ textDecoration: "none" }}
          className=" sm:inline-block link text-orange-600 hover:text-orange-400  "
          href={"#home"}
        >
          Home
        </a>
        <a
          style={{ textDecoration: "none" }}
          className=" sm:inline-block  link text-orange-600 hover:text-orange-400   ml-10"
          href={"#about"}
        >
          About
        </a>
        <a
          style={{ textDecoration: "none" }}
          className="sm:inline-block   link text-orange-600 hover:text-orange-400   ml-10"
          href={"#details"}
        >
          Features
        </a>
        <span
          style={{ textDecoration: "none" }}
          className="text-x ml-10 link text-orange-600 hover:text-orange-400   "
          onClick={() => navigate("/auth")}
        >
          Dashboard
        </span>
      </div>
      <div className="copyright">
        <p className="text-center">&copy;copyright, 2024</p>
      </div>
    </Footers>
  );
};

export default Footer;
