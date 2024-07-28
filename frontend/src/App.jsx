import { useEffect } from "react";
import API from "./services/API";
import React from "react";
import { Route, Routes } from "react-router-dom";
const AuthPage = React.lazy(() => import("./page/AuthPage"));
const LandingPage = React.lazy(() => import("./page/LandingPage"));
import { ToastContainer } from "react-toastify";
// import { DashboardPage } from "./page/DashboardPage";
const DashboardPage = React.lazy(() => import("./page/DashboardPage.jsx"));
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const verify = async () => {
      const data = await API.isUserLoggedin();
      if (data.success) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    };
    verify();
  }, []);

  return (
    <div className="overflow-hidden">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
