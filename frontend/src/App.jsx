import { useEffect } from "react";
import API from "./services/API";

import AuthPage from "./page/AuthPage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import { ToastContainer } from "react-toastify";
import { DashboardPage } from "./page/DashboardPage";
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
