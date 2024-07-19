import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-orange-200 min-h-screen flex flex-col justify-center items-center">
      <h1>Landing page</h1>
      <button className="bg-orange-600 p-2" onClick={() => navigate("/auth")}>
        Lets Start
      </button>
    </div>
  );
};

export default LandingPage;
