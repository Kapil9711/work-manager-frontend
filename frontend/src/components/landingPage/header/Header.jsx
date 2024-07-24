import Images from "./Images";
import Navbar from "./Navbar";
import Texts from "./Texts";
import Boxes from "./Boxes";
import Content from "./Content";
const Header = ({ height }) => {
  console.log("header");
  return (
    <header
      style={{ maxHeight: "720px", minHeight: "715px", maxWidth: "1280px" }}
      className=" sm:container font-sans relative h-screen mx-auto pt-20 "
    >
      <Navbar />
      <Images height={height} />
      <Texts height={height} />
      <Boxes height={height} />
      <Content />
    </header>
  );
};

export default Header;
