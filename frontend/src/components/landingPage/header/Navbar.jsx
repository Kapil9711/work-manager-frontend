import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../../images/logo.png";
import { Expo } from "gsap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(".link", {
      delay: 1.4,
      duration: 2,
      opacity: 0,
      y: 10,
      stagger: 0.2,
      ease: Expo.easeInOut,
    });
  });

  return (
    <nav className=" z-30  absolute top-0 left-0 w-full   ">
      <ul className="ul links py-5  flex text-2xl sm:container   justify-between ">
        <div>
          <span>
            <img className="link w-40 h-12" src={logo} alt="logo img" />
          </span>
        </div>
        <div className="">
          <span
            style={{ textDecoration: "none" }}
            className="hidden sm:inline-block link text-orange-600 hover:text-orange-400  "
          >
            Home
          </span>
          <a
            style={{ textDecoration: "none" }}
            className="hidden sm:inline-block  link text-orange-600 hover:text-orange-400   ml-10"
            href={"#about"}
          >
            About
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="hidden sm:inline-block   link text-orange-600 hover:text-orange-400   ml-10"
            href={"#details"}
          >
            Features
          </a>
          <span
            style={{ textDecoration: "none" }}
            className="text-xl ml-10 link text-orange-600 hover:text-orange-400   "
            onClick={() => navigate("/auth")}
          >
            Dashboard
          </span>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
