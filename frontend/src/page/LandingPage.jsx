import Header from "../components/landingPage/header/Header";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(Number(window.innerHeight));
  }, []);

  return (
    <div className="min-h-screen px-4 overflow-hidden sm:px-0  bg-black  text-white">
      <Header height={height} />
    </div>
  );
};

export default LandingPage;
