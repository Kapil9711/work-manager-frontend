import { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";
import ResetPassword from "../components/auth/ResetPassword";
const AuthPage = () => {
  const [isActive, setActive] = useState("login");
  const [resetToken, setResetToken] = useState("");

  return (
    <div className="w-full  min-h-screen bg-orange-600 flex justify-center items-center">
      {isActive === "login" && <Login setActive={setActive} />}
      {isActive === "register" && <Register setActive={setActive} />}
      {isActive === "forgotPassword" && (
        <ForgotPassword setActive={setActive} setResetToken={setResetToken} />
      )}
      {isActive === "resetPassword" && (
        <ResetPassword resetToken={resetToken} setActive={setActive} />
      )}
    </div>
  );
};

export default AuthPage;
