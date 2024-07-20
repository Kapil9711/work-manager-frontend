import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../../images/logo.png";
import { Expo } from "gsap";

const Navbar = () => {
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
          <a href="/">
            <img className="link w-40 h-12" src={logo} alt="logo img" />
          </a>
        </div>
        <div className="">
          <a
            style={{ textDecoration: "none" }}
            className="hidden sm:inline-block link text-orange-600 hover:text-orange-400  "
            href={"/"}
          >
            Home
          </a>
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
          <a
            style={{ textDecoration: "none" }}
            className="text-xl ml-10 link text-orange-600 hover:text-orange-400   "
            href={"/tasks"}
          >
            Dashboard
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
